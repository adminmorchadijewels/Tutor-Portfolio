export interface BlogSection {
  type: "intro" | "section" | "list" | "closing" | "cta";
  heading?: string;
  body?: string;
  items?: string[];
  ctaText?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  tag: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: BlogSection[];
}

export const blogContent: BlogPost[] = [
  {
    slug: "report-card-lying",
    title: "Your Child's Report Card is Lying to You",
    tag: "For Parents",
    date: "December 2024",
    readTime: "4 min read",
    excerpt:
      "Marks tell you what happened three months ago, not what your child is capable of today. A student who scores 90% by memorising is more fragile than one who scores 75% by genuinely understanding. Here is why that distinction changes everything.",
    content: [
      {
        type: "intro",
        body: "Every parent I speak to has looked at their child's report card and felt something was off. The numbers look reasonable. Maybe even good. But you watch your child struggle with homework every night. You see the panic before exams. You notice they cannot explain a single concept without their notes in front of them.\n\nYou are not imagining it. The report card is lying to you.",
      },
      {
        type: "section",
        heading: "What marks actually measure",
        body: "A mark tells you one thing: how well your child performed on that specific set of questions, on that specific day, after preparing in that specific way.\n\nIt does not tell you if they understood the concept.\nIt does not tell you if they could solve a variation of the same problem.\nIt does not tell you if they could explain it to someone else.\nIt does not tell you if they will remember it in six months.\n\nA student who scores 90 percent by memorising a formula is far more fragile than one who scores 75 percent by genuinely understanding why the formula works. The first student is one unfamiliar question away from falling apart. The second can adapt to almost anything.",
      },
      {
        type: "section",
        heading: "The memorisation trap",
        body: "Our entire education system is optimised for one thing: performance on standardised tests. Memorise, recall, repeat. It is an efficient system for producing consistent results on paper.\n\nIt is a terrible system for producing capable human beings.\n\nThe students who thrive in the real world are not the ones who memorised the most. They are the ones who can think through a problem they have never seen before. Who can research, question, synthesise, and decide. Who can learn new things quickly because they understand how to learn, not just what to learn.",
      },
      {
        type: "section",
        heading: "What to look for instead",
        body: "Instead of asking your child what score they got, try asking:\nCan you explain this concept to me as if I know nothing?\nWhat would happen if we changed one variable in this problem?\nWhere does this show up in real life?\n\nThe quality of their answers will tell you far more than any report card ever could.",
      },
      {
        type: "closing",
        body: "Marks are a lagging indicator. They tell you what happened months ago. What matters is what is happening right now in how your child thinks.\n\nThat is what I work on with every student. Not the score. The thinking behind it.",
      },
      {
        type: "cta",
        ctaText:
          "Want to understand where your child's thinking actually stands? Book a free evaluation session.",
        ctaLabel: "Book Free Evaluation",
        ctaHref: "/#contact",
      },
    ],
  },
  {
    slug: "chatgpt-made-school-irrelevant",
    title:
      "ChatGPT Just Made Half of School Irrelevant. Here is What Actually Matters Now.",
    tag: "AI and Education",
    date: "January 2025",
    readTime: "5 min read",
    excerpt:
      "AI handles information retrieval better than any student ever could. The skills that matter now are prompting, critical thinking, research, and adaptability. Schools have not caught up. Here is what to do about it.",
    content: [
      {
        type: "intro",
        body: "I want to be careful not to be alarmist here. Schools still matter. Teachers still matter. But something fundamental shifted when AI became capable of answering almost any factual or analytical question instantly.\n\nThe shift is this: information retrieval is no longer a valuable skill. And a large portion of what schools spend time teaching is exactly that.",
      },
      {
        type: "section",
        heading: "What AI can already do better than most students",
        body: "Write essays on almost any topic.\nSolve maths problems step by step.\nExplain scientific concepts at any level of complexity.\nSummarise long documents in seconds.\nGenerate code from plain English descriptions.\nResearch a topic and produce a structured report.\n\nIf a student's primary skill is retrieving and regurgitating information, that skill is becoming less valuable every single month.",
      },
      {
        type: "section",
        heading: "What AI cannot replace",
        body: "Asking the right question in the first place.\nKnowing which information to trust and which to question.\nApplying knowledge to a genuinely novel situation.\nMaking a judgment call when the data is ambiguous.\nCommunicating an idea clearly to another human being.\nDeciding what matters and what does not.\nLearning something completely new, independently and quickly.\n\nThese are not soft skills. These are the hard skills of the next decade.",
      },
      {
        type: "section",
        heading: "What this means for your child's education right now",
        body: "It means the goal of education needs to shift from content delivery to thinking development.\n\nIt means the student who knows how to use AI as a tool, direct it, question its outputs, and build on top of it, will have a massive advantage over the student who either ignores it or blindly trusts it.\n\nIt means the ability to learn anything independently is more valuable than any specific subject knowledge.\n\nIt means adaptability is the curriculum.",
      },
      {
        type: "closing",
        body: "I built Beyond Marks around exactly this principle. Not because I predicted AI, but because I learned this lesson myself: when you know how to learn, the specific content almost takes care of itself.\n\nThe students I work with do not just get better at their subjects. They get better at getting better at things. That is the skill that compounds.",
      },
      {
        type: "cta",
        ctaText:
          "Curious how to build this in your child? Start with a free conversation.",
        ctaLabel: "Book Free Discovery Call",
        ctaHref: "/#contact",
      },
    ],
  },
  {
    slug: "tutor-vs-mentor",
    title: "Why Your Child Does Not Need Another Tutor",
    tag: "Mentorship",
    date: "January 2025",
    readTime: "3 min read",
    excerpt:
      "A tutor explains last Tuesday's lesson. A mentor changes how you think for the rest of your life. The difference is not the subject. It is the intention and the method. Here is how to tell them apart.",
    content: [
      {
        type: "intro",
        body: "There is a version of this where I tell you that tutors are bad and mentors are good. That is not what I believe.\n\nGood tutors do important work. If your child has a specific gap in a specific subject before a specific exam, a good tutor can fill that gap efficiently.\n\nBut if the problem is deeper than a single subject gap, a tutor will not fix it. And in my experience, most of the time the problem is deeper.",
      },
      {
        type: "section",
        heading: "What a tutor actually does",
        body: "A tutor explains content. They identify where a student is confused about a topic and they clarify it. They assign practice problems and check the work. They repeat this until the student can perform adequately on an exam.\n\nThis is genuinely useful. It is also inherently temporary.\n\nThe student learns the content. They do not learn how to learn the content themselves. The moment the tutor leaves, the dependency remains. Give it a few weeks and the same gaps appear in the next chapter.",
      },
      {
        type: "section",
        heading: "What a mentor does differently",
        body: "A mentor is not trying to explain last Tuesday's lesson. A mentor is trying to change how you think.\n\nThe questions are different. Instead of how do we solve this problem, it is how did you think about approaching this problem. Instead of here is the answer, it is what would you try first and why.\n\nThe goal is never to be needed. A good mentor is always working toward making themselves unnecessary. That is the only real measure of success.",
      },
      {
        type: "section",
        heading: "How to tell the difference",
        body: "Ask any tutor or mentor one question: what does success look like at the end of our time together?\n\nA tutor will say: better grades, more confidence in the subject, ready for the exam.\n\nA mentor will say: your child should not need me anymore. They should be able to tackle any new topic independently, ask better questions, and learn anything they decide they want to learn.",
      },
      {
        type: "closing",
        body: "I am not the right fit for every student. If you need someone to get through the next exam, there are excellent tutors who will do that well.\n\nIf you want your child to become the kind of person who does not need a tutor for the exam after that, or the one after that, that is what I work on.",
      },
      {
        type: "cta",
        ctaText:
          "Want to see if this is the right fit? The first conversation is free and there is no pressure.",
        ctaLabel: "Book Free Discovery Call",
        ctaHref: "/#contact",
      },
    ],
  },
];
