import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center bg-black pt-16 font-sans text-white">
      <main className="text-center">
        <div className="text-center">
          <h1 className="font-bold">
            <span className="block text-3xl">
              <span className="text-blue-500">Astro</span>
              IO:
            </span>
            <span className="block text-2xl">
              Complementary Learning-based Inertial Odometry
              <br />
              for Free-Flying Robots in Microgravity
            </span>
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            ICRA 2027 Contributed Paper Submission
            <br />
            Anonymous Authors
          </p>
        </div>
        <div className="mt-4 flex justify-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2 text-black"
          >
            <Image src="/file.svg" alt="" width={15} height={15} className="brightness-0" />
            <span>Paper</span>
          </a>

          <a
            href="https://www.youtube.com/embed/_RM1DStHQRE"
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-black"
          >
            <Image src="/youtube.svg" alt="" width={15} height={15} />
            <span>Video</span>
          </a>

          <a
            href="https://github.com/astro-io-robotics/AstroIO"
            className="flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2 text-black"
          >
            <Image src="/github.svg" alt="" width={20} height={20} className="brightness-0" />
            <span>Code</span>
          </a>
        </div>
        <div id="video" className="mx-auto mt-12 max-w-3xl px-6">
          <iframe
            className="aspect-video w-full rounded-xl border-0"
            src="https://www.youtube.com/embed/_RM1DStHQRE"
            title="AstroIO Video Attachment"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <section className="mx-auto mt-20 max-w-3xl px-6 pb-20">
          <h2 className="text-2xl font-bold">Abstract</h2>
          <p className="mt-4 rounded-xl border border-white/20 bg-white/5 p-6 text-justify leading-relaxed text-gray-300">
            We present <strong>AstroIO</strong>, a learning-based inertial odometry framework for free-flying robots in microgravity.
            Learning motion from inertial measurements becomes particularly challenging in microgravity: free-flying robots lack the contact constraints, gravity-induced motion regularities, and persistent gravity direction that provide useful structure in terrestrial and aerial settings.
            AstroIO addresses these challenges by combining two complementary learned measurements.
            A displacement branch learns finite-window translation from the statistical structure of autonomous flight, while a velocity-increment branch corrects nominal inertial integration and directly constrains changes in velocity.
            Their predictions are jointly fused in a stochastic cloning error-state EKF, together with random SO(3) rotation augmentation to reflect the absence of a persistent gravity direction in microgravity.
            Experiments on a synthetic Astrobee dataset show that jointly fusing these complementary measurements substantially improves trajectory accuracy over the evaluated learning-based inertial odometry baselines.  
          </p>
        </section>
      </main>
    </div>
  );
}
