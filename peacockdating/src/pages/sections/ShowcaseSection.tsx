import { Card } from "../../components/ui/Card";

import {
  Video,
  MicOff,
  Heart,
  Send,
  CheckCircle,
  Camera,
  MessageSquare,
} from "lucide-react";

/* --- Main Component --- */

export function ShowcaseSection() {
  return (
    <section
      id="showcase"
      className="py-12 md:py-20 bg-gradient-to-br from-peacock-50 to-peacock-100/20 dark:from-peacock-800/80 dark:to-peacock-900 transition-colors"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-header text-3xl md:text-4xl font-bold text-peacock-900 dark:text-peacock-100">
            How the Interview & Matching Works
          </h2>
          <p className="mt-3 text-base md:text-lg text-peacock-700 dark:text-peacock-200 max-w-3xl mx-auto">
            Our host-guided format creates a respectful space where men can
            share authentically and women can choose privately.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Step 1: The Interview Process for Men */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-peacock-500/20 flex items-center justify-center">
                  <Video className="w-6 h-6 text-peacock-500" />
                </div>
                <h3 className="text-2xl font-bold text-peacock-900 dark:text-peacock-100">
                  The Men's Interview Experience
                </h3>
              </div>
              <p className="text-peacock-700 dark:text-peacock-200 mb-4">
                Men join on camera for a friendly, host-guided conversation.
                This isn't a grilling session—it's designed to help you open up
                naturally and show your personality.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-peacock-green flex-shrink-0 mt-0.5" />
                  <span className="text-peacock-800 dark:text-peacock-100 text-sm">
                    <strong>Camera on for the full event</strong> - You're the
                    star of your own show
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-peacock-green flex-shrink-0 mt-0.5" />
                  <span className="text-peacock-800 dark:text-peacock-100 text-sm">
                    <strong>Share your story:</strong> Talk about your values,
                    hobbies, what you've learned in life
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-peacock-green flex-shrink-0 mt-0.5" />
                  <span className="text-peacock-800 dark:text-peacock-100 text-sm">
                    <strong>You can decline any question</strong> - Stay
                    comfortable while being authentic
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-peacock-green flex-shrink-0 mt-0.5" />
                  <span className="text-peacock-800 dark:text-peacock-100 text-sm">
                    <strong>Timed turns for fairness</strong> - Everyone gets
                    equal opportunity to shine
                  </span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <Card className="glass-card p-0 overflow-hidden">
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop"
                    alt="Man speaking confidently on video call"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </Card>
            </div>
          </div>

          {/* Step 2: What Women Experience */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-1">
              <Card className="glass-card p-0 overflow-hidden">
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format&fit=crop"
                    alt="Woman listening thoughtfully during online event"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </Card>
            </div>
            <div className="order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-peacock-purple/20 flex items-center justify-center">
                  <MicOff className="w-6 h-6 text-peacock-purple" />
                </div>
                <h3 className="text-2xl font-bold text-peacock-900 dark:text-peacock-100">
                  The Women's Listening Experience
                </h3>
              </div>
              <p className="text-peacock-700 dark:text-peacock-200 mb-4">
                Women can join with cameras off and remain completely anonymous.
                Listen comfortably without any pressure to participate visibly.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-peacock-green flex-shrink-0 mt-0.5" />
                  <span className="text-peacock-800 dark:text-peacock-100 text-sm">
                    <strong>Camera optional</strong> - Stay anonymous and
                    comfortable
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-peacock-green flex-shrink-0 mt-0.5" />
                  <span className="text-peacock-800 dark:text-peacock-100 text-sm">
                    <strong>Ask questions via chat</strong> - DM the host who
                    will ask on your behalf
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-peacock-green flex-shrink-0 mt-0.5" />
                  <span className="text-peacock-800 dark:text-peacock-100 text-sm">
                    <strong>Take notes privately</strong> - No rush to decide on
                    the spot
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-peacock-green flex-shrink-0 mt-0.5" />
                  <span className="text-peacock-800 dark:text-peacock-100 text-sm">
                    <strong>Want to speak directly?</strong> Just turn on both
                    video and audio
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3: How Matches Are Made */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-peacock-gold/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-peacock-gold" />
                </div>
                <h3 className="text-2xl font-bold text-peacock-900 dark:text-peacock-100">
                  Private Matching Process
                </h3>
              </div>
              <p className="text-peacock-700 dark:text-peacock-200 mb-4">
                After the event ends, the real magic happens. Women submit their
                picks privately, and matches are only revealed when both people
                say "yes."
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-peacock-green flex-shrink-0 mt-0.5" />
                  <span className="text-peacock-800 dark:text-peacock-100 text-sm">
                    <strong>Women nominate privately</strong> - Your choices are
                    completely confidential
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-peacock-green flex-shrink-0 mt-0.5" />
                  <span className="text-peacock-800 dark:text-peacock-100 text-sm">
                    <strong>Men also submit their picks</strong> - Both sides
                    indicate interest
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-peacock-green flex-shrink-0 mt-0.5" />
                  <span className="text-peacock-800 dark:text-peacock-100 text-sm">
                    <strong>Only mutual matches revealed</strong> - Your
                    interest stays private otherwise
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-peacock-green flex-shrink-0 mt-0.5" />
                  <span className="text-peacock-800 dark:text-peacock-100 text-sm">
                    <strong>Host makes introductions</strong> - Get connected
                    via email to start chatting
                  </span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <Card className="glass-card p-0 overflow-hidden">
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/hands.jpg"
                    alt="Hands forming a heart — symbolising mutual connection and consent"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </Card>
            </div>
          </div>

          {/* Real Example Scenario */}
          <div className="mt-16">
            <Card className="glass-card p-6 md:p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-peacock-900 dark:text-peacock-100 mb-3">
                  Real Example: How It Works
                </h3>
                <p className="text-peacock-700 dark:text-peacock-200">
                  Here's exactly what happens from start to finish
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 rounded-full bg-peacock-500/20 flex items-center justify-center mx-auto">
                    <Camera className="w-8 h-8 text-peacock-500" />
                  </div>
                  <h4 className="font-semibold text-peacock-900 dark:text-peacock-100">
                    The Interview
                  </h4>
                  <p className="text-sm text-peacock-700 dark:text-peacock-200">
                    Alex shares his story on camera: his passion for rock
                    climbing, his work as a teacher, and what he's learned about
                    relationships. Sarah listens anonymously.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-16 h-16 rounded-full bg-peacock-purple/20 flex items-center justify-center mx-auto">
                    <MessageSquare className="w-8 h-8 text-peacock-purple" />
                  </div>
                  <h4 className="font-semibold text-peacock-900 dark:text-peacock-100">
                    The Questions
                  </h4>
                  <p className="text-sm text-peacock-700 dark:text-peacock-200">
                    Sarah is curious about Alex's teaching philosophy. She DMs
                    the host: "What's your favorite part about teaching?" The
                    host asks Alex, who lights up talking about it.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-16 h-16 rounded-full bg-peacock-gold/20 flex items-center justify-center mx-auto">
                    <Send className="w-8 h-8 text-peacock-gold" />
                  </div>
                  <h4 className="font-semibold text-peacock-900 dark:text-peacock-100">
                    The Match
                  </h4>
                  <p className="text-sm text-peacock-700 dark:text-peacock-200">
                    After the event, both Sarah and Alex privately nominate each
                    other. Since it's mutual, the host sends them both an email
                    introduction to start chatting.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
