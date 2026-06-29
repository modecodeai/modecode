export const services = [
  {
    title: "Websites",
    description: "Clear, fast websites built around trust, search and conversion.",
    snippet: "page({ speed: true, trust: true })"
  },
  {
    title: "AI Tools",
    description: "Practical assistants for admin, marketing, research and operations.",
    snippet: "assistant.scope('useful')"
  },
  {
    title: "Automation",
    description: "Joined-up systems for forms, email, bookings, payments and data.",
    snippet: "sync(forms, email, data)"
  },
  {
    title: "MVPs",
    description: "Lean prototypes for testing digital ideas before overbuilding.",
    snippet: "ship({ small: true })"
  },
  {
    title: "Design for Manufacturing",
    description:
      "CAD, prototyping and production-aware design for physical products.",
    snippet: "cad({ measured: true })"
  }
];

export const manufacturingCapabilities = [
  "CAD modelling",
  "CNC-aware design",
  "3D printing",
  "Product prototyping",
  "Material-aware design",
  "Stonework and fabrication-informed thinking",
  "Concept-to-manufacture support",
  "Design refinement for physical production"
];

export const caseStudies = [
  {
    title: "Pathfinder Therapy",
    description:
      "A calm, trust-led therapy website structured around clear service journeys and enquiries.",
    meta: "Website direction"
  },
  {
    title: "SurfMassage",
    description:
      "A practical local-service presence designed to explain treatments and reduce booking friction.",
    meta: "Service website"
  },
  {
    title: "AI Campaign Assistant",
    description:
      "A focused internal tool concept for turning campaign inputs into useful marketing drafts.",
    meta: "AI workflow"
  }
];

export const processSteps = ["Map", "Design", "Build", "Test", "Launch"];

export const workflowSnippet = `const workflow = {
  manual: false,
  connected: true,
  useful: true,
}`;

export const prototypeSnippet = `const prototype = {
  concept: "clear",
  model: "measured",
  material: "considered",
  output: "testable",
}`;

export const productIdeaSnippet = `type ProductIdea = {
  sketch: string
  cad: boolean
  prototype: "printed" | "machined" | "refined"
}`;
