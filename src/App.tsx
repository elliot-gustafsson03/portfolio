import { type Component, For, Show } from "solid-js";

import portrait from "./assets/portrait.png";
import segwayVideo from "./assets/mini-segway.mp4";
import beamVideo from "./assets/beam-and-ball.mp4";
import hoseImage from "./assets/hose-robot.png";
import dspImage from "./assets/dsp.png";
import snakeImage from "./assets/snake.png";

interface ProjectProps {
  title: string;
  description: string;
  stack: string;
  github?: string;
  mediaType: "image" | "video" | "none";
  mediaSrc?: string;
  reverse?: boolean;
}

const ProjectPanel: Component<ProjectProps> = (props) => {
  return (
    <article class="mb-12 group">
      <div class="bg-linear-to-b from-[#1c1c1e] to-[#121214] border border-white/5 rounded-2xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)]">
        <div
          class={`flex flex-col gap-8 items-center ${props.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          {/* Media Section */}
          <Show when={props.mediaType !== "none"}>
            <div class="w-full md:w-1/2 shrink-0">
              <div class="rounded-lg overflow-hidden border border-white/10 shadow-inner bg-black aspect-video relative">
                <Show when={props.mediaType === "video"}>
                  <video
                    src={props.mediaSrc}
                    autoplay
                    loop
                    muted
                    playsinline
                    class="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </Show>
                <Show when={props.mediaType === "image"}>
                  <img
                    src={props.mediaSrc}
                    alt={props.title}
                    class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                  />
                </Show>
              </div>
            </div>
          </Show>

          {/* Text Section */}
          <div
            class={`w-full ${props.mediaType !== "none" ? "md:w-1/2" : ""} flex flex-col justify-center`}
          >
            <header class="flex justify-between items-baseline mb-4 gap-4">
              <h3 class="text-xl font-semibold text-neutral-200 tracking-tight">
                <a
                  href={props.github}
                  target="_blank"
                  rel="noreferrer"
                  class={`transition-colors decoration-neutral-600 underline-offset-4 ${props.github ? "hover:underline hover:text-white" : ""}`}
                >
                  {props.title}
                  <Show when={props.github}>
                    <span class="ml-2">↗</span>
                  </Show>
                </a>
              </h3>
            </header>

            <p class="text-neutral-400 text-sm md:text-base leading-relaxed mb-6">
              {props.description}
            </p>

            <div class="text-xs font-mono text-neutral-500 bg-black/20 p-3 rounded-md border border-white/5 inline-block w-fit">
              {props.stack}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const Section: Component<{ title: string; children: any }> = (props) => {
  return (
    <section>
      <h2 class="text-sm font-mono text-neutral-300 mb-8 uppercase tracking-widest border-b border-neutral-800 pb-3 pl-2">
        {props.title}
      </h2>
      {props.children}
    </section>
  );
};

const App: Component = () => {
  const projects: ProjectProps[] = [
    {
      title: "Concrete Pump Hose",
      description: "",
      stack: "PLC Programming • Physics • Data Collection",
      github: "https://elliot-gustafsson03.github.io/hose-sim/",
      mediaType: "image",
      mediaSrc: hoseImage,
    },
    {
      title: "Ball and Beam Regulator",
      description: "",
      stack: "Java • Concurrency • PID Regulation",
      mediaType: "video",
      mediaSrc: beamVideo,
    },
    {
      title: "Real-time Audio Processing",
      description: "",
      stack: "C • Real-time • Signal Processing",
      github: "https://github.com/elliot-gustafsson03/realtime-dsp",
      mediaType: "image",
      mediaSrc: dspImage,
    },
    {
      title: "Controlling of Mini Segway",
      description: "",
      stack: "MatLab • LQR • Kalman Filter",
      mediaType: "video",
      mediaSrc: segwayVideo,
    },
    {
      title: "AI Snake",
      description: "",
      stack: "TypeScript • Machine Learning",
      github: "https://elliot-gustafsson03.github.io/AI-Snake/",
      mediaType: "image",
      mediaSrc: snakeImage,
    },
  ];

  return (
    <div class="min-h-screen bg-[#09090b] text-neutral-400 font-sans selection:bg-neutral-700 selection:text-neutral-100 py-16 px-4 md:py-24">
      {/* Document Container */}
      <main class="max-w-4xl mx-auto">
        {/* Header with Portrait */}
        <header class="mb-20 pl-2 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
          {/* Portrait Image Container */}
          <div class="shrink-0 relative group">
            {/* The wrapper creates the metallic ring effect */}
            <div class="w-3/4 sm:w-48 rounded-full overflow-hidden border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)] bg-[#121214]">
              <img
                src={portrait}
                alt="Jane Doe"
                class="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
          </div>

          {/* Header Text Container */}
          <div>
            <h1 class="text-3xl font-semibold text-neutral-100 mb-2 tracking-tight">
              Elliot Gustafsson
            </h1>
            <p class="text-neutral-500 mb-4 font-mono text-sm">
              Computer Engineer
            </p>

            <p class="text-base leading-relaxed text-neutral-400 max-w-2xl mb-6">
              I specialize in analyzing and developing systems for applications
              in automatic control and signal processing.
            </p>

            <div class="flex flex-wrap gap-6 text-sm font-mono">
              <a
                href="mailto:elliot.gustafsson03@gmail.com"
                class="text-neutral-500 hover:text-neutral-200 transition-colors"
              >
                email
              </a>
              <a
                href="https://github.com/elliot-gustafsson03"
                class="text-neutral-500 hover:text-neutral-200 transition-colors"
              >
                github
              </a>
              <a
                href="https://www.linkedin.com/in/elliot-gustafsson-14594a265/"
                class="text-neutral-500 hover:text-neutral-200 transition-colors"
              >
                linkedin
              </a>
              <a
                href="/cv.pdf"
                class="text-neutral-500 hover:text-neutral-200 transition-colors"
              >
                resume
              </a>
            </div>
          </div>
        </header>

        {/* Projects Section */}
        <Section title="Engineering Projects">
          <div class="flex flex-col">
            <For each={projects}>
              {(project, index) => (
                <ProjectPanel
                  title={project.title}
                  description={project.description}
                  stack={project.stack}
                  github={project.github}
                  mediaType={project.mediaType}
                  mediaSrc={project.mediaSrc}
                  reverse={index() % 2 !== 0}
                />
              )}
            </For>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default App;
