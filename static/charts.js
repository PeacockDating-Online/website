// ripped from static/analytics.js


// Keep chart configs so we can rebuild on theme change
const __chartConfigs = [
    { id: 'ages-pie', cfg: {} },
    { id: 'cities-pie', cfg: {} },
];

function observeThemeChanges() {
    const targetEls = [document.documentElement, document.body].filter(Boolean);
    const mo = new MutationObserver(() => {
        // re-render both charts on theme flip
        __chartConfigs.forEach(({ id, cfg }) => cfg && renderChart(id, cfg));
    });
    targetEls.forEach(el => mo.observe(el, { attributes: true, attributeFilter: ['class'] }));
}

window.addEventListener('DOMContentLoaded', () => {
    hydrateDynamicContent();
    observeThemeChanges();
});

function hydrateDynamicContent() {
    /* buildHowSteps(); buildRoles(); buildRules(); buildFAQ(); buildCTAStats(); */ buildAgesCities();
    // Dynamically build Ages & Cities section and render a pie chart
    function buildAgesCities() {
        const ageCfg = {
            type: 'doughnut',
            data: {
                labels: ['18-30', '30-40', '40-50', '50+'],
                datasets: [{
                    data: [33, 11, 39, 17],
                    backgroundColor: ['#FACC15', '#A3E635', '#38BDF8', '#C084FC'],
                    borderWidth: 1
                }]
            },
            title: 'Age Groups',
            isDoughnut: true
        };

        const cityCfg = {
            type: 'bar',
            data: {
                labels: ['Sydney', 'Melbourne', 'Adelaide', 'Brisbane', 'New Zealand'],
                datasets: [{
                    data: [56, 28, 6, 6, 6],
                    backgroundColor: ['#FACC15', '#38BDF8', '#A3E635', '#C084FC', '#F472B6'],
                    borderRadius: 6
                }]
            },
            title: 'Locations',
            isHorizontal: true
        };

        // save for theme re-render
        __chartConfigs[0].cfg = ageCfg;
        __chartConfigs[1].cfg = cityCfg;

        renderChart('ages-pie', ageCfg);
        renderChart('cities-pie', cityCfg);
    }

    // Load Chart.js from CDN
    function loadChartJs() {
        if (window.Chart) return Promise.resolve();
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    function renderChart(containerId, config) {
        const el = document.getElementById(containerId);
        if (!el) return;

        // Create wrapper and canvas
        const isDark = document.documentElement.classList.contains('dark') ||
            document.body.classList.contains('dark');
        const textColor = isDark ? '#FDE68A' : '#1e293b';
        const bgColor = isDark ? '#18181b' : '#fff';
        const gridColor = isDark ? 'rgba(253,230,138,0.10)' : 'rgba(30,41,59,0.08)';
        const fontFamily = 'inherit, ui-sans-serif, system-ui, sans-serif';

        el.innerHTML = `<div class="${isDark ? 'bg-peacock-900/80' : 'bg-white'} rounded-2xl p-8 shadow-lg flex flex-col items-center transition-colors duration-300">
    <h3 class="text-2xl font-extrabold text-peacock-900 dark:text-peacock-gold mb-6 tracking-tight text-center">${config.title}</h3>
    <div class="relative w-full max-w-[340px] mx-auto" style="height: 320px;">
      <canvas></canvas>
    </div>
  </div>`;
        const canvas = el.querySelector('canvas');

        const chartConfig = {
            type: config.type,
            data: {
                ...config.data,
                datasets: config.data.datasets.map(dataset => ({
                    ...dataset,
                    label: dataset.label || config.title,
                    borderWidth: 2,
                    borderColor: isDark ? '#FDE68A' : '#1e293b',
                    hoverBorderWidth: 3
                }))
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: 0
                },
                plugins: {
                    legend: {
                        display: config.isDoughnut,
                        position: 'bottom',
                        labels: {
                            color: textColor,
                            font: {
                                size: 20,
                                weight: 'bold',
                                family: fontFamily
                            },
                            padding: 22,
                            boxWidth: 25 // Make legend color boxes bigger
                        }
                    },
                    tooltip: {
                        backgroundColor: bgColor,
                        titleColor: textColor,
                        bodyColor: textColor,
                        borderColor: isDark ? '#FDE68A' : '#1e293b',
                        borderWidth: 1,
                        titleFont: { size: 18, weight: 'bolder', family: fontFamily },
                        bodyFont: { size: 17, weight: 'bolder', family: fontFamily },
                        callbacks: {
                            label: function (context) {
                                return (context.label || '') + ': ' + context.raw + '%';
                            }
                        }
                    }
                },
                animation: {
                    duration: 900,
                    easing: 'easeOutQuart'
                },
                elements: {
                    arc: {
                        borderWidth: 2
                    },
                    bar: {
                        borderRadius: 8
                    }
                }
            }
        };

        if (config.isHorizontal) {
            // Ensure legend is hidden for locations chart
            chartConfig.options.plugins.legend.display = false;
            chartConfig.options.indexAxis = 'y';
            chartConfig.options.scales = {
                x: {
                    display: false, // Hide x axis
                    min: 0,
                    max: 100,
                    grid: { display: false },
                    ticks: { display: false }
                },
                y: {
                    grid: { display: false },
                    ticks: {
                        color: textColor,
                        font: {
                            size: 18,
                            weight: 900,
                            family: fontFamily
                        },
                        padding: 12
                    }
                }
            };
            // Add value labels at end of bars using Chart.js plugin
            chartConfig.options.plugins.datalabels = {
                anchor: 'end',
                align: 'right',
                color: textColor,
                font: {
                    size: 22,
                    weight: 'bolder',
                    family: fontFamily
                },
                formatter: function (value) {
                    return value + '%';
                },
                clamp: true,
                offset: 10
            };
            // Make bars longer by increasing chart height
            el.querySelector('.relative').style.height = '340px';
        }

        loadChartJs().then(() => {
            // Load datalabels plugin if needed
            if (config.isHorizontal && !window.ChartDataLabels) {
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels';
                script.onload = () => {
                    Chart.register(window.ChartDataLabels);
                    new Chart(canvas, chartConfig);
                };
                document.head.appendChild(script);
            } else if (config.isHorizontal) {
                Chart.register(window.ChartDataLabels);
                new Chart(canvas, chartConfig);
            } else {
                new Chart(canvas, chartConfig);
            }
        });
    }
}