const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://parthka.com/',
  title: 'P A R T H',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Parth',
  role: 'Software Engineer',
  description:
    'I am a Software Engineer with 2+ years of experience in developing web applications and services using various technologies and frameworks. I have contributed to several open source projects. I am proficient in GoLang, JS/TS, React/Next and other web development tools and skills. I am looking for an opportunity to join a dynamic and innovative team where I can apply my skills and learn new technologies.',
  resume: 'https://parthka.com/Parth-Degama.pdf',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/pfivea',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'canvasLib',
    description:
      'is Open Source HTML5 Canvas Manipulation Library.',
    stack: ['TypeScript'],
    sourceCode: 'https://github.com/pfivea/canvaslib',
  },
  {
    name: 'casm',
    description:
      'casm Open Source is x86_64/amd64 ISA base mini computer assembler.',
    stack: ['GoLang'],
  },
  {
    name: 'ZigStr',
    description:
      'ZigStr is String library for Zig Programming Language',
    stack: ['Zig'],
    sourceCode: 'https://github.com/pfivea/zigstr',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'GoLang',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Git',
  'Zig',
  'Tailwind CSS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hello@parthka.com',
}

export { header, about, projects, skills, contact }
