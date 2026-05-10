"use client";

import { useMemo, useState } from "react";

export default function KnowledgeHub() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("roadmap");<button
  onClick={() => setActiveTab("nasa")}
  className={`px-6 py-3 rounded-2xl transition ${
    activeTab === "nasa"
      ? "bg-cyan-500 text-black"
      : "bg-zinc-900 text-white hover:bg-zinc-800"
  }`}
>
  🚀 NASA
</button>

  const roadmap = [
    {
      level: "LEVEL 1 — FOUNDATION OF REALITY & SCIENCE",
      color: "border-cyan-500/30 bg-cyan-500/10",
      topics: [
        {
          title: "What Is Science?",
          description:
            "Understand scientific thinking, evidence, experiments, and verification.",
          concepts: [
            "Scientific Method",
            "Observation",
            "Hypothesis",
            "Experiment",
            "Evidence",
            "Peer Review",
          ],
        },
        {
          title: "Critical Thinking",
          description:
            "Develop logic, skepticism, and the ability to separate evidence from belief.",
          concepts: [
            "Logic",
            "Rational Thinking",
            "Cognitive Bias",
            "Confirmation Bias",
            "Emotional Thinking",
            "Skepticism",
          ],
        },
      ],
    },
    {
      level: "LEVEL 2 — HUMAN BODY & CONSCIOUSNESS",
      color: "border-purple-500/30 bg-purple-500/10",
      topics: [
        {
          title: "Human Brain",
          description:
            "Explore awareness, neurons, cognition, emotions, and memory.",
          concepts: [
            "Neurons",
            "Memory",
            "Emotions",
            "Attention",
            "Awareness",
            "Perception",
          ],
        },
        {
          title: "Consciousness",
          description:
            "Study self-awareness, free will, ego, and identity.",
          concepts: [
            "Self Awareness",
            "Identity",
            "Ego",
            "Perception",
            "Free Will",
          ],
        },
        {
          title: "Brain Waves & States",
          description:
            "Understand meditation states, dream states, and brain wave activity.",
          concepts: [
            "Alpha Waves",
            "Theta Waves",
            "Delta Waves",
            "Meditation States",
            "Dream States",
          ],
        },
      ],
    },
    {
      level: "LEVEL 3 — MEDITATION & PHILOSOPHY",
      color: "border-emerald-500/30 bg-emerald-500/10",
      topics: [
        {
          title: "Meditation Basics",
          description:
            "Learn mindfulness, vipassana, awareness, and concentration practices.",
          concepts: [
            "Mindfulness",
            "Vipassana",
            "Breathing Meditation",
            "Focus Meditation",
            "Mantra Meditation",
          ],
        },
        {
          title: "Scientific Effects of Meditation",
          description:
            "Research-based effects of meditation on the brain and body.",
          concepts: [
            "Stress Reduction",
            "Improved Focus",
            "Emotional Balance",
            "Better Sleep",
          ],
        },
        {
          title: "Deep Meditation Experiences",
          description:
            "Explore timelessness, ego dissolution, and altered states.",
          concepts: [
            "Timelessness",
            "Ego Dissolution",
            "Universal Connection",
            "Out-of-body Sensations",
          ],
        },
        {
          title: "Eastern Philosophy",
          description:
            "Explore Buddhism, Vedanta, Taoism, awareness, and enlightenment.",
          concepts: [
            "Buddhism",
            "Vedanta",
            "Taoism",
            "Enlightenment",
          ],
        },
      ],
    },
    {
      level: "LEVEL 4 — ADVANCED PHYSICS & COSMOS",
      color: "border-pink-500/30 bg-pink-500/10",
      topics: [
        {
          title: "Relativity",
          description:
            "Study space-time, gravity, and time dilation.",
          concepts: [
            "Space-Time",
            "Gravity",
            "Electricity",
            "Magnetism",
            "Waves",
            "Time Dilation",
          ],
        },
        {
          title: "Quantum Mechanics",
          description:
            "Understand uncertainty, entanglement, and probability.",
          concepts: [
            "Wave Particle Duality",
            "Uncertainty Principle",
            "Quantum Entanglement",
            "Probability",
          ],
        },
        {
          title: "Teleportation",
          description:
            "Understand quantum teleportation and the limits of human teleportation.",
          concepts: [
            "Quantum Teleportation",
            "Information Transfer",
            "Limits of Human Teleportation",
          ],
        },
        {
          title: "Philosophy",
          description:
            "Explore metaphysics, existentialism, truth, and reality.",
          concepts: [
            "Metaphysics",
            "Existentialism",
            "Truth",
            "Reality",
            "Free Will",
          ],
        },
        {
          title: "Western Philosophy",
          description:
            "Learn how thinkers explored existence and reality.",
          concepts: [
            "Socrates",
            "Plato",
            "Descartes",
            "Nietzsche",
          ],
        },
        {
          title: "Simulation Theory",
          description:
            "Explore computational universe and virtual reality theories.",
          concepts: [
            "Virtual Reality Concepts",
            "Computational Universe",
            "Consciousness Theories",
          ],
        },
        {
          title: "Near-Death Experiences",
          description:
            "Explore clinical reports and altered consciousness experiences.",
          concepts: [
            "Tunnel Experiences",
            "Out-of-body Reports",
            "Clinical Brain Activity",
          ],
        },
        {
          title: "Astral Projection",
          description:
            "Understand lucid dreaming, sleep paralysis, and spiritual interpretations.",
          concepts: [
            "Lucid Dreaming",
            "Sleep Paralysis",
            "Spiritual Interpretation",
          ],
        },
        {
          title: "Psychedelics & Consciousness",
          description:
            "Study altered states, perception changes, and ego effects.",
          concepts: [
            "Altered States",
            "Perception Changes",
            "Ego Effects",
          ],
        },
        {
          title: "Master Level Thinking",
          description:
            "Learn to distinguish science, theory, philosophy, and pseudoscience.",
          concepts: [
            "Science",
            "Theory",
            "Hypothesis",
            "Philosophy",
            "Spirituality",
            "Mythology",
            "Pseudoscience",
          ],
        },
        {
          title: "Daily Learning Structure",
          description:
            "Build consistent long-term learning habits.",
          concepts: [
            "1 Hour Science",
            "20 Min Meditation",
            "30 Min Philosophy",
            "Weekly Documentaries",
          ],
        },
        {
          title: "Cosmology",
          description:
            "Explore black holes, galaxies, dark matter, and universe expansion.",
          concepts: [
            "Big Bang",
            "Black Holes",
            "Dark Matter",
            "Galaxies",
          ],
        },
      ],
    },
  ];

  const allTopics = useMemo(() => {
    return roadmap.flatMap((level) =>
      level.topics.flatMap((topic) =>
        topic.concepts.map((concept) => ({
          concept,
          topic: topic.title,
          color: level.color,
        }))
      )
    );
  }, []);

  const filtered = allTopics.filter(
    (item) =>
      item.concept.toLowerCase().includes(search.toLowerCase()) ||
      item.topic.toLowerCase().includes(search.toLowerCase())
  );

  const wiki = (topic: string) =>
    `https://en.wikipedia.org/wiki/${topic.replace(/ /g, "_")}`;

  const google = (topic: string, type: string) =>
    `https://www.google.com/search?q=${encodeURIComponent(topic + " " + type)}`;

  const research = (topic: string) =>
    `https://scholar.google.com/scholar?q=${encodeURIComponent(topic)}`;

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-5">
          <div>
            <h1 className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-5xl font-black text-transparent">
              🌌 Knowledge Universe
            </h1>

            <p className="mt-2 text-slate-400">
              Science • Consciousness • Meditation • Philosophy • Universe
            </p>
          </div>

          <div className="w-full max-w-xl rounded-3xl border border-cyan-500/20 bg-white/5 p-4 shadow-2xl">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search concepts, meditation, philosophy, physics..."
              className="w-full bg-transparent text-lg outline-none placeholder:text-slate-500"
            />

            {search && (
              <div className="mt-4 max-h-72 overflow-auto rounded-2xl border border-white/10 bg-black/20 p-3">
                <div className="space-y-2">
                  {filtered.map((item) => (
                    <a
                      key={`${item.topic}-${item.concept}`}
                      href={wiki(item.concept)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block rounded-2xl border p-4 transition hover:scale-[1.01] ${item.color}`}
                    >
                      <div className="font-bold">{item.concept}</div>
                      <div className="mt-1 text-xs text-slate-300">
                        {item.topic}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 pb-5">
          {[
  ["roadmap", "Roadmap"],
  ["topics", "Topics"],
  ["hvac", "HVAC Learning"],
  ["nasa", "NASA News"],
  ["docs", "Documentaries"],
  ["scienceNews", "Science News"],
].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`rounded-full px-5 py-2 text-sm transition ${
                activeTab === id
                  ? "bg-cyan-400 text-black"
                  : "border border-white/10 bg-white/5 text-slate-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <section className="mb-10 grid gap-6 lg:grid-cols-4">
          {[
            {
              icon: "🧠",
              title: "Critical Thinking",
              text: "Separate evidence, theory, belief, and speculation.",
              color: "border-cyan-500/20 bg-cyan-500/10 text-cyan-300",
            },
            {
              icon: "⚛️",
              title: "Science & Physics",
              text: "Explore matter, energy, quantum mechanics, and cosmology.",
              color: "border-purple-500/20 bg-purple-500/10 text-purple-300",
            },
            {
              icon: "🧘",
              title: "Meditation",
              text: "Understand mindfulness, awareness, and inner observation.",
              color: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
            },
            {
              icon: "🌌",
              title: "Universe & Reality",
              text: "Study black holes, dark matter, space-time, and existence.",
              color: "border-yellow-500/20 bg-yellow-500/10 text-yellow-300",
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`rounded-[32px] border p-6 shadow-2xl ${card.color}`}
            >
              <div className="mb-4 text-5xl">{card.icon}</div>
              <h3 className="mb-3 text-2xl font-black">{card.title}</h3>
              <p className="text-sm leading-7 text-slate-200">{card.text}</p>
            </div>
          ))}
        </section>

        {activeTab === "roadmap" && (
          <div className="space-y-10">
            {roadmap.map((level) => (
              <section
                key={level.level}
                className={`rounded-[32px] border p-8 shadow-2xl ${level.color}`}
              >
                <h2 className="mb-8 text-3xl font-black">{level.level}</h2>

                <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                  {level.topics.map((topic) => (
                    <div
                      key={topic.title}
                      className="rounded-3xl border border-white/10 bg-black/20 p-6"
                    >
                      <h3 className="mb-4 text-2xl font-bold">
                        {topic.title}
                      </h3>

                      <p className="mb-5 text-sm leading-7 text-slate-300">
                        {topic.description}
                      </p>

                      <div className="space-y-3">
                        {topic.concepts.map((concept) => (
                          <div
                           key={`${topic.title}-${concept}`}
                            className="rounded-2xl border border-white/10 bg-white/5 p-4"
                          >
                            <div className="mb-3 text-lg font-semibold">
                              {concept}
                            </div>

                            <div className="flex flex-wrap gap-2 text-xs">
                              <a
                                href={wiki(concept)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-white/10 px-3 py-1"
                              >
                                Wikipedia
                              </a>

                              <a
                                href={google(concept, "theory")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-cyan-500/20 px-3 py-1"
                              >
                                Theory
                              </a>

                              <a
                                href={google(concept, "examples")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-purple-500/20 px-3 py-1"
                              >
                                Examples
                              </a>

                              <a
                                href={research(concept)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-yellow-500/20 px-3 py-1"
                              >
                                Research
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {activeTab === "topics" && (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {allTopics.map((item) => (
              <div
                key={`${item.topic}-${item.concept}`}
                className={`rounded-3xl border p-6 ${item.color}`}
              >
                <div className="mb-2 text-xs text-slate-300">
                  {item.topic}
                </div>

                <h3 className="mb-5 text-2xl font-bold">
                  {item.concept}
                </h3>

                <div className="grid gap-3">
                  <a
                    href={wiki(item.concept)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-black/20 px-4 py-3 text-center"
                  >
                    Open Wikipedia
                  </a>

                  <a
                    href={google(item.concept, "theory")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-black/20 px-4 py-3 text-center"
                  >
                    Study Theory
                  </a>

                  <a
                    href={research(item.concept)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-black/20 px-4 py-3 text-center"
                  >
                    Research Papers
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "hvac" && (
          <section className="rounded-[36px] border border-blue-500/20 bg-blue-500/10 p-10 shadow-2xl">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-5">
              <div>
                <h2 className="text-5xl font-black text-blue-300">
                  ❄️ HVAC Professional Learning Hub
                </h2>

                <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300">
                  Consultant-level HVAC learning for cleanrooms, data centers, pharma HVAC, BIM, ACPH, psychrometrics, and advanced system design.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  icon: "🏭",
                  title: "Cleanroom HVAC",
                  text: "Pressure cascades, filtration, ISO classes, ACPH.",
                },
                {
                  icon: "🖥️",
                  title: "Data Centers",
                  text: "PAHU, CRAH, airflow management, redundancy.",
                },
                {
                  icon: "📐",
                  title: "Calculations",
                  text: "Heat load, ventilation, psychrometrics, sizing.",
                },
                {
                  icon: "🏗️",
                  title: "BIM & Design",
                  text: "Coordination, modeling, detailing, clash detection.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-black/20 p-6"
                >
                  <div className="mb-4 text-5xl">{item.icon}</div>
                  <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                  <p className="text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8 text-center">
              <div className="mb-4 text-6xl">🚀</div>

              <h3 className="mb-4 text-3xl font-black text-cyan-300">
                Professional HVAC Learning Drive
              </h3>

              <a
                href="https://drive.google.com/drive/folders/1Ehk1rekeCds0I2hixrIro9epa_xe5KSZ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-2xl bg-cyan-400 px-8 py-4 text-lg font-bold text-black transition hover:scale-105"
              >
                📂 Open HVAC Google Drive
              </a>
            </div>
          </section>
        )}{/* ADVANCED HVAC MASTER LIBRARY */}
<div>
  <h3 className="mb-6 text-5xl font-black text-cyan-300">
    🚀 Advanced HVAC Master Library
  </h3>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

    {[
      {
        title: "ASHRAE",
        desc: "Global HVAC engineering standards and research.",
        link: "https://www.ashrae.org/",
      },

      {
        title: "ISHRAE",
        desc: "Indian Society of Heating Refrigeration and Air Conditioning Engineers.",
        link: "https://ishrae.in/",
      },

      {
        title: "SMACNA",
        desc: "Duct construction and HVAC installation standards.",
        link: "https://www.smacna.org/",
      },

      {
        title: "AHRI",
        desc: "HVAC equipment certification and performance standards.",
        link: "https://www.ahrinet.org/",
      },

      {
        title: "AMCA",
        desc: "Air movement and fan engineering standards.",
        link: "https://www.amca.org/",
      },

      {
        title: "NFPA",
        desc: "Fire and smoke control standards.",
        link: "https://www.nfpa.org/",
      },

      {
        title: "Adicot",
        desc: "Advanced cleanroom and containment engineering.",
        link: "https://www.adicot.com/",
      },

      {
        title: "CDC Ventilation",
        desc: "Healthcare and hospital ventilation guidance.",
        link: "https://www.cdc.gov/",
      },

      {
        title: "Carrier",
        desc: "Chiller and advanced HVAC technologies.",
        link: "https://www.carrier.com/",
      },

      {
        title: "Daikin VRV",
        desc: "VRV/VRF advanced HVAC systems.",
        link: "https://www.daikin.com/",
      },

      {
        title: "Trane",
        desc: "Industrial cooling and smart HVAC systems.",
        link: "https://www.trane.com/",
      },

      {
        title: "Johnson Controls",
        desc: "BMS and smart building technologies.",
        link: "https://www.johnsoncontrols.com/",
      },

    ].map((item) => (
      <a
        key={item.title}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-3xl border border-cyan-500/20 bg-zinc-900 p-6 hover:scale-[1.02] transition"
      >
        <h4 className="mb-3 text-2xl font-bold text-cyan-300">
          {item.title}
        </h4>

        <p className="text-slate-300">
          {item.desc}
        </p>
      </a>
    ))}

  </div>
</div>

{/* HVAC FUTURE TECHNOLOGIES */}
<div>
  <h3 className="mb-6 text-5xl font-black text-purple-300">
    ⚡ Future HVAC Technologies
  </h3>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

    {[
      {
        title: "AI Controlled HVAC",
        link: "https://www.johnsoncontrols.com/",
      },

      {
        title: "Digital Twin",
        link: "https://www.autodesk.com/solutions/digital-twin",
      },

      {
        title: "CFD Airflow Simulation",
        link: "https://www.ansys.com/",
      },

      {
        title: "Net Zero Buildings",
        link: "https://www.energy.gov/",
      },

      {
        title: "Magnetic Bearing Chillers",
        link: "https://www.danfoss.com/",
      },

      {
        title: "Smart Sensors & IoT",
        link: "https://www.honeywell.com/",
      },

      {
        title: "Hydrogen Cooling",
        link: "https://www.iea.org/",
      },

      {
        title: "Radiant Cooling",
        link: "https://www.rehva.eu/",
      },

      {
        title: "Liquid Cooling",
        link: "https://www.vertiv.com/",
      },

    ].map((item) => (
      <a
        key={item.title}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-6 hover:scale-[1.03] transition"
      >
        <h4 className="text-2xl font-bold text-purple-300">
          {item.title}
        </h4>
      </a>
    ))}

  </div>
</div>

<section className="mt-12 space-y-10">

  {/* HVAC NEWS */}
  <div>
    <h3 className="mb-6 text-4xl font-black text-cyan-300">
      📰 HVAC Industry News
    </h3>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {[
        {
          title: "ASHRAE News",
          link: "https://www.ashrae.org/",
          desc: "Latest HVAC standards, research, and engineering news.",
        },
        {
          title: "ACHR News",
          link: "https://www.achrnews.com/",
          desc: "Global HVAC industry updates and projects.",
        },
        {
          title: "HVACR Business",
          link: "https://hvacrbusiness.com/",
          desc: "Commercial HVAC and refrigeration updates.",
        },
      ].map((item) => (
        <a
          key={item.title}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6 hover:scale-[1.02] transition"
        >
          <h4 className="text-2xl font-bold text-cyan-300">
            {item.title}
          </h4>

          <p className="mt-3 text-slate-300">
            {item.desc}
          </p>
        </a>
      ))}

    </div>
  </div>

  {/* HVAC STANDARDS */}
  <div>
    <h3 className="mb-6 text-4xl font-black text-purple-300">
      📚 HVAC Standards & Codes
    </h3>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          title: "ASHRAE Standards",
          link: "https://www.ashrae.org/technical-resources/standards-and-guidelines",
        },
        {
          title: "NBC 2016",
          link: "https://bis.gov.in/",
        },
        {
          title: "SMACNA",
          link: "https://www.smacna.org/",
        },
        {
          title: "ISHRAE",
          link: "https://ishrae.in/",
        },
      ].map((item) => (
        <a
          key={item.title}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-6 text-center hover:scale-[1.02] transition"
        >
          <h4 className="text-xl font-bold text-purple-300">
            {item.title}
          </h4>
        </a>
      ))}

    </div>
  </div>

  {/* HVAC SPECIALIZED INDUSTRIES */}
<div>
  <h3 className="mb-6 text-5xl font-black text-emerald-300">
    🏭 Specialized HVAC Industries
  </h3>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

    {[
      {
        title: "Pharma HVAC",
        link: "https://www.ashrae.org/",
      },

      {
        title: "Semiconductor HVAC",
        link: "https://www.semiconductor-digest.com/",
      },

      {
        title: "Battery Manufacturing HVAC",
        link: "https://www.energy.gov/",
      },

      {
        title: "Hospital HVAC",
        link: "https://www.cdc.gov/",
      },

      {
        title: "Operation Theater HVAC",
        link: "https://www.who.int/",
      },

      {
        title: "Data Center Cooling",
        link: "https://uptimeinstitute.com/",
      },

      {
        title: "Industrial Ventilation",
        link: "https://www.smacna.org/",
      },

      {
        title: "Refinery HVAC",
        link: "https://www.api.org/",
      },

      {
        title: "Nuclear HVAC",
        link: "https://www.iaea.org/",
      },

      {
        title: "Food Industry HVAC",
        link: "https://www.fda.gov/",
      },

      {
        title: "Laboratory Ventilation",
        link: "https://www.aiha.org/",
      },

      {
        title: "Automobile HVAC",
        link: "https://www.sae.org/",
      },

    ].map((item) => (
      <a
        key={item.title}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-5 text-center text-xl font-bold text-emerald-300 hover:scale-[1.03] transition"
      >
        {item.title}
      </a>
    ))}

  </div>
</div>

  {/* HVAC DOCUMENTARIES */}
  <div>
    <h3 className="mb-6 text-4xl font-black text-yellow-300">
      🎬 HVAC Technical Videos
    </h3>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {[
        {
          title: "HVAC Basics",
          link: "https://www.youtube.com/results?search_query=hvac+engineering+basics",
        },
        {
          title: "Cleanroom HVAC",
          link: "https://www.youtube.com/results?search_query=cleanroom+hvac+design",
        },
        {
          title: "Data Center Cooling",
          link: "https://www.youtube.com/results?search_query=data+center+cooling+system",
        },
      ].map((item) => (
        <a
          key={item.title}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6 hover:scale-[1.02] transition"
        >
          <h4 className="text-2xl font-bold text-yellow-300">
            {item.title}
          </h4>
        </a>
      ))}

    </div>
  </div>

  {/* RESEARCH */}
  <div>
    <h3 className="mb-6 text-4xl font-black text-pink-300">
      🔬 HVAC Research & Papers
    </h3>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {[
        {
          title: "Google Scholar HVAC",
          link: "https://scholar.google.com/scholar?q=HVAC",
        },
        {
          title: "ASHRAE Journal",
          link: "https://www.ashrae.org/technical-resources/ashrae-journal",
        },
        {
          title: "ScienceDirect HVAC",
          link: "https://www.sciencedirect.com/topics/engineering/hvac-system",
        },
      ].map((item) => (
        <a
          key={item.title}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-3xl border border-pink-500/20 bg-pink-500/10 p-6 hover:scale-[1.02] transition"
        >
          <h4 className="text-2xl font-bold text-pink-300">
            {item.title}
          </h4>
        </a>
      ))}

    </div>
  </div>{/* BIM & DIGITAL ENGINEERING */}
<div>
  <h3 className="mb-6 text-5xl font-black text-blue-300">
    🏗️ BIM & Digital Engineering
  </h3>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

    {[
      {
        title: "Autodesk Revit",
        link: "https://www.autodesk.com/products/revit/",
      },

      {
        title: "BIM 360 / ACC",
        link: "https://construction.autodesk.com/",
      },

      {
        title: "Navisworks",
        link: "https://www.autodesk.com/products/navisworks/",
      },

      {
        title: "Revit Families",
        link: "https://www.bimobject.com/",
      },

      {
        title: "Dynamo for Revit",
        link: "https://dynamobim.org/",
      },

      {
        title: "BIM Coordination",
        link: "https://www.autodesk.com/solutions/bim",
      },

      {
        title: "Clash Detection",
        link: "https://www.autodesk.com/products/navisworks/",
      },

      {
        title: "Digital Twin",
        link: "https://www.autodesk.com/solutions/digital-twin",
      },

    ].map((item) => (
      <a
        key={item.title}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6 hover:scale-[1.03] transition"
      >
        <h4 className="text-2xl font-bold text-blue-300">
          {item.title}
        </h4>
      </a>
    ))}

  </div>
</div>{/* HVAC CALCULATIONS */}
<div>
  <h3 className="mb-6 text-5xl font-black text-yellow-300">
    📐 HVAC Calculations & Formulas
  </h3>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

    {[
      {
        title: "Heat Load Calculation",
        link: "https://www.engineeringtoolbox.com/",
      },

      {
        title: "Psychrometric Chart",
        link: "https://www.linric.com/psychrometric-chart/",
      },

      {
        title: "Duct Sizing",
        link: "https://ductulator.com/",
      },

      {
        title: "Pipe Sizing",
        link: "https://www.engineeringtoolbox.com/",
      },

      {
        title: "ACPH Calculation",
        link: "https://www.pharmaguideline.com/",
      },

      {
        title: "Static Pressure",
        link: "https://www.engineeringtoolbox.com/",
      },

      {
        title: "Chiller Calculation",
        link: "https://www.carrier.com/",
      },

      {
        title: "Pump Head Calculation",
        link: "https://www.engineeringtoolbox.com/pump-head-pressure-d_663.html",
      },

      {
        title: "Cooling Tower Calculation",
        link: "https://www.spxcooling.com/",
      },

    ].map((item) => (
      <a
        key={item.title}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6 hover:scale-[1.03] transition"
      >
        <h4 className="text-2xl font-bold text-yellow-300">
          {item.title}
        </h4>
      </a>
    ))}

  </div>
</div>{/* HVAC FORMULAS */}
<div>
  <h3 className="mb-6 text-5xl font-black text-pink-300">
    🧮 HVAC Engineering Formulas
  </h3>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

    {[
      "CFM = Heat Load / (1.08 × ΔT)",
      "TR = 12000 BTU/hr",
      "ACPH = CFM × 60 / Room Volume",
      "ESP = Static Pressure Loss",
      "Pump Head = Pressure / Density",
      "Velocity = CFM / Area",
      "Sensible Heat = 1.08 × CFM × ΔT",
      "Latent Heat = 0.68 × CFM × ΔGrains",
      "Water Flow = TR × 2.4 / ΔT",
    ].map((item) => (
      <div
        key={item}
        className="rounded-3xl border border-pink-500/20 bg-pink-500/10 p-6 text-xl font-bold text-pink-300"
      >
        {item}
      </div>
    ))}

  </div>
</div>{/* HVAC PROJECT WORKFLOW */}
<div>
  <h3 className="mb-6 text-5xl font-black text-cyan-300">
    ⚙️ HVAC Project Workflow
  </h3>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

    {[
      "Client Requirement",
      "Basis of Design",
      "Heat Load Calculation",
      "Equipment Selection",
      "Duct Routing",
      "Pipe Routing",
      "BIM Coordination",
      "Clash Detection",
      "Shop Drawings",
      "BOQ Preparation",
      "Site Execution",
      "Testing & Commissioning",
    ].map((item) => (
      <div
        key={item}
        className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-5 text-center text-xl font-bold text-cyan-300"
      >
        {item}
      </div>
    ))}

  </div>
</div>

</section>{activeTab === "nasa" && (
  <section className="space-y-8">

    <h2 className="text-5xl font-black text-cyan-300">
      🚀 NASA & Space Exploration
    </h2>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {[
        {
          title: "NASA Official",
          link: "https://www.nasa.gov/",
          desc: "Latest space missions and discoveries.",
        },
        {
          title: "Space.com",
          link: "https://www.space.com/",
          desc: "Live space and astronomy news.",
        },
        {
          title: "ESA Space Agency",
          link: "https://www.esa.int/",
          desc: "European space exploration updates.",
        },
      ].map((item) => (
        <a
          key={item.title}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6 hover:scale-[1.02] transition"
        >
          <h3 className="text-2xl font-bold text-cyan-300">
            {item.title}
          </h3>

          <p className="mt-3 text-slate-300">
            {item.desc}
          </p>
        </a>
      ))}

    </div>

  </section>
)}{activeTab === "docs" && (
  <section className="space-y-8">

    <h2 className="text-5xl font-black text-purple-300">
      🎬 Scientific Documentaries
    </h2>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {[
        {
          title: "Cosmos",
          link: "https://www.youtube.com/results?search_query=cosmos+documentary",
          desc: "Universe and cosmology documentary.",
        },
        {
          title: "Quantum Physics",
          link: "https://www.youtube.com/results?search_query=quantum+physics+documentary",
          desc: "Quantum mechanics explained.",
        },
        {
          title: "Black Holes",
          link: "https://www.youtube.com/results?search_query=black+hole+documentary",
          desc: "Explore black holes and gravity.",
        },
      ].map((item) => (
        <a
          key={item.title}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-6 hover:scale-[1.02] transition"
        >
          <h3 className="text-2xl font-bold text-purple-300">
            {item.title}
          </h3>

          <p className="mt-3 text-slate-300">
            {item.desc}
          </p>
        </a>
      ))}

    </div>

  </section>
)}{activeTab === "scienceNews" && (
  <section className="space-y-8">

    <h2 className="text-5xl font-black text-yellow-300">
      📰 Live Science News
    </h2>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {[
        {
          title: "Google Science News",
          link: "https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqYUdjU0FtVnVLQUFQAQ",
          desc: "Latest global science updates.",
        },
        {
          title: "Nature Journal",
          link: "https://www.nature.com/news",
          desc: "Scientific research and discoveries.",
        },
        {
          title: "Scientific American",
          link: "https://www.scientificamerican.com/",
          desc: "Science and technology articles.",
        },
      ].map((item) => (
        <a
          key={item.title}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6 hover:scale-[1.02] transition"
        >
          <h3 className="text-2xl font-bold text-yellow-300">
            {item.title}
          </h3>

          <p className="mt-3 text-slate-300">
            {item.desc}
          </p>
        </a>
      ))}

    </div>

  </section>
)}
      </main>

      <footer className="mt-20 border-t border-white/10 py-10 text-center text-slate-400">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-xs">
          {[
            "🔬 Science",
            "🧠 Consciousness",
            "🧘 Meditation",
            "⚛️ Physics",
            "🌌 Universe",
            "📚 Philosophy",
            "❄️ HVAC",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
            >
              {tag}
            </span>
          ))}
        </div>

        <p>Built for deep learning and structured knowledge exploration.</p>
        <div className="mt-3 text-cyan-300">Developed by Gurdas Singh</div>
      </footer>
    </div>
  );
}
