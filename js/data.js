/* Content data for the VCE Art Creative Practice Units 1 & 2 Catch-Up Studio.
   Sourced from the official VCAA Art Creative Practice Study Design 2023-2027. */

const CREATIVE_PRACTICE = [
  {
    id: 'research',
    title: 'Research and Exploration',
    tagline: 'Where every idea starts',
    points: [
      'Researching and exploring ideas based on experiences, observations and personal interest',
      'Researching and exploring materials, techniques and processes in art forms to respond to personal, cultural and social influences and ideas',
      'Researching and examining personal, cultural, historical and social influences that inform the exploration and development of artworks',
      'Exploring, analysing and interpreting influences and ideas in artworks using the Interpretive Lenses',
      'Exploring, analysing and evaluating how artists use visual language to communicate personal, cultural and social influences, ideas, beliefs and values'
    ],
    tryIt: 'Pick one thing you genuinely find interesting right now (a place, a memory, a feeling, an object). Spend 15 minutes researching one artist who has explored something similar — jot down 3 facts about their practice.'
  },
  {
    id: 'experimentation',
    title: 'Experimentation and Development',
    tagline: 'Where ideas get tested',
    points: [
      'Experimenting with materials, techniques and processes to develop artworks',
      'Experimenting with personal ideas and responses',
      'Experimenting with the influences of ideas, values and beliefs to develop artworks',
      'Developing ideas in artworks through experimentation and exploration',
      'Developing knowledge of art elements and art principles through experimentation and exploration to create visual language',
      'Developing points of view and interpretations of the meanings and messages of artworks in different contexts using the Interpretive Lenses',
      'Developing artworks in response to the research and exploration of, and experimentation with, visual language'
    ],
    tryIt: 'Take one material you already own (pencil, paper, phone camera, fabric scraps) and make 5 quick studies in 20 minutes. Don\'t aim for a finished piece — aim for 5 different ways of using it.'
  },
  {
    id: 'refinement',
    title: 'Refinement and Resolution',
    tagline: 'Where you make the call',
    points: [
      'Resolving ideas and visual language in artworks',
      'Resolving points of view and interpretations of the meanings and messages of artworks, using critical judgment and the Interpretive Lenses',
      'Realising and refining artworks through the selection and manipulation of materials, techniques and processes',
      'Refining the use of visual language to communicate ideas and meaning in artworks',
      'Refining technical skill in the use of materials, techniques and processes in art forms to communicate ideas and meaning in artworks',
      'Considering the presentation and display of artworks in different contexts to communicate ideas and meaning'
    ],
    tryIt: 'Look back at your last few experiments. Pick the one with the most potential and push it one step further — refine the technique, change the scale, or commit to a final material choice.'
  },
  {
    id: 'reflection',
    title: 'Reflection and Evaluation',
    tagline: 'Where you think about your thinking',
    points: [
      'Analysing and evaluating artworks using the appropriate Interpretive Lenses',
      'Analysing and evaluating the application of materials, techniques and processes to resolve ideas in artworks using the Interpretive Lenses',
      'Critically analysing and evaluating how the symbolic values and beliefs of people, places and objects are assigned by artists and viewers or audiences',
      'Analysing and evaluating how visual language can communicate ideas and meaning in artworks',
      'Reflecting, analysing and evaluating using critique and feedback'
    ],
    tryIt: 'Write 3-4 sentences in your visual diary about one piece of work you made this week: what you were trying to communicate, what worked, and what you would change next time.'
  }
];

const MAKING_RESPONDING = {
  making: 'Through ‘Making’ students develop their knowledge, understanding and skills in art practice, including the techniques, processes, materials and technologies used to make artworks. Making involves students communicating ideas and intended meanings in different art forms. Students explore personal ideas and experiences through making artworks in different art forms and styles. They build their knowledge and understanding of visual language, and develop skills in applying materials, techniques and processes in visual language to communicate ideas and meaning.',
  responding: 'Through ‘Responding’ students explore, analyse, reflect upon and interpret their own artworks and the artworks of others. Students discuss and evaluate their own art and artworks created by others, and the practices used to create them. As they view, analyse and interpret artworks, students develop an understanding of visual language and how artists communicate ideas and meaning. They view the presentation of artworks in different contexts and from different periods of time, societies and cultures.'
};

const LENSES = [
  {
    id: 'structural',
    name: 'Structural Lens',
    colour: '#c1440e',
    definition: 'The Structural Lens informs the analysis and interpretation of an artwork, and its relationship with the artist and viewer or audience, through the investigation of the use of art elements and art principles, and the application of materials, techniques and processes. It also considers the stylistic qualities and symbolism evident in the artwork, and the context in which artists work and in which artworks are presented or viewed.',
    responding: 'Students decode artworks by reading the relationships between specific signs, symbols and conventions in visual language. They explore the stylistic qualities that are used to transmit ideas in artworks and consider the context in which artists work and in which artworks are presented and viewed.',
    making: 'Students focus on the formal organisation and placement of visual components in an artwork and explore the use and communicative value of symbols, the conventions of visual language, stylistic qualities, materials, techniques and processes. They also consider the context in which their artworks are made and in which they will be presented or viewed.',
    keyQuestion: 'What has the artist used, and how is it put together?'
  },
  {
    id: 'personal',
    name: 'Personal Lens',
    colour: '#7b5ea7',
    definition: 'The Personal Lens informs the analysis and interpretation of an artwork through the investigation of the personal feelings, beliefs and life experiences of the artist. The evaluation and interpretation of an artwork can be influenced by the life experiences, personal feelings and beliefs of the viewer or audience and the context in which artists work and in which artworks are presented or viewed.',
    responding: 'Students examine how artists and viewers or audiences are influenced by society, culture and personal experiences, and the context in which artists work and in which artworks are presented and viewed. They also consider how their own feelings, background, experiences, society and culture can influence their physical and emotional reactions to an artwork as a viewer or member of an audience.',
    making: 'Students investigate their responses to the world around them, including their personal interests, experiences, cultural and social context and world view (beliefs and values), and the impact these have on symbolism and art practice. They consider the materials, techniques and processes used to make their artworks, as well as the context in which their artworks are made and in which they will be presented or viewed.',
    keyQuestion: 'What does this mean to the artist, and what does it mean to me?'
  },
  {
    id: 'cultural',
    name: 'Cultural Lens',
    colour: '#1f7a5c',
    definition: 'The Cultural Lens informs the analysis and interpretation of an artwork through the investigation of social, historical and cultural influences and representations. This includes the influence of the time and place in which the artwork is made, presented or viewed, as well as the social, historical, political, philosophical and economic influences on the practices of the artist, and how these are reflected in the artwork.',
    responding: 'Students consider the regional, national, international, social and cultural identity of artists and viewers or audiences, including Aboriginal and Torres Strait Islander peoples and artists. They consider the context in which artists work and in which artworks are presented and viewed, as well as the ways artists use their artworks as a vehicle to invite change and provoke conversation.',
    making: 'Students explore cultural values, historical or contemporary events, social issues, attitudes and beliefs that impact on them and others, and determine the origins of social and cultural meanings communicated in artworks. They also consider the context in which their artworks are made and in which they will be presented or viewed. In creating their own artworks, students should be aware of the cultural protocols associated with making artworks based on the practices of artists from other cultures.',
    keyQuestion: 'What social, historical or cultural forces shaped this artwork?'
  }
];

const ART_ELEMENTS = [
  { term: 'Colour', def: 'Hue, tone, saturation and the relationships between colours — how they combine, contrast or harmonise.' },
  { term: 'Line', def: 'A mark with length and direction — can be straight, curved, thick, thin, continuous or broken.' },
  { term: 'Shape', def: 'A flat, enclosed area defined by an edge — geometric or organic.' },
  { term: 'Form', def: 'The three-dimensional equivalent of shape — volume, mass and structure in space.' },
  { term: 'Tone', def: 'The lightness or darkness of a colour or surface, used to create depth and contrast.' },
  { term: 'Texture', def: 'The surface quality of an artwork — how it looks or feels (actual or implied).' },
  { term: 'Sound', def: 'Audible elements used as a deliberate part of an artwork’s visual language, especially in time-based and installation work.' },
  { term: 'Time', def: 'Duration, sequence, pace or change — relevant to film, video, performance and durational works.' },
  { term: 'Light', def: 'The presence, direction, intensity and quality of light, and how it reveals or obscures form.' }
];

const ART_PRINCIPLES = [
  { term: 'Emphasis (focal point)', def: 'The area an artist draws the viewer’s eye to first.' },
  { term: 'Movement', def: 'The visual flow that leads the eye through an artwork.' },
  { term: 'Rhythm', def: 'A sense of organised, repeated visual ‘beat’ across an artwork.' },
  { term: 'Unity', def: 'The sense that all parts of an artwork belong together as a whole.' },
  { term: 'Variety', def: 'Difference and diversity introduced to avoid monotony.' },
  { term: 'Space', def: 'The area within, around or between elements — positive, negative, deep or flat.' },
  { term: 'Repetition (including pattern)', def: 'An element or motif reused across an artwork.' },
  { term: 'Balance', def: 'The distribution of visual weight — symmetrical, asymmetrical or radial.' },
  { term: 'Contrast', def: 'Placing different or opposing elements together to create visual tension.' },
  { term: 'Proportion', def: 'The relationship in size between parts of an artwork or between the artwork and the viewer.' },
  { term: 'Scale', def: 'The size of an artwork or its components, often relative to the human body.' }
];

const GLOSSARY = [
  { term: 'Visual Language', def: 'Visual language combines the art elements and art principles with materials, techniques and processes to communicate meaning and personal, cultural and contemporary ideas to an audience.' },
  { term: 'Context', def: 'The frame of reference that allows the meaning of an artwork to be interpreted. Context can be the location and time in which the artwork is made, presented or viewed, and can also be economic, philosophical, historical, social or cultural.' },
  { term: 'Critique', def: 'A discursive collaborative environment that is organised to engage, explore, express, present and evaluate artworks and to understand, reflect on and improve awareness of the characteristics of art making.' },
  { term: 'Body of Work', def: 'A collection of a student’s personal responses in their art practice, integrating the four components of the Creative Practice, related through ideas, subject matter, style, art form, or materials and techniques.' },
  { term: 'Influences and Inspiration', def: 'Influences occur and are used throughout art making and include artists and artworks. Inspiration can be viewed more broadly and includes objects, memories and contexts that are personal to the artist.' },
  { term: 'Contemporary Artist', def: 'For the purposes of this study, an artist who has produced art in the 21st century (since 2001).' },
  { term: 'Art Form', def: 'An established form of artistic expression — e.g. painting, drawing, printmaking, sculpture, film, video, ceramics, sound, photography, performance, textiles, fashion, digital artworks, interdisciplinary practices, installations and street art.' },
  { term: 'Materials, Techniques and Processes', def: 'Materials are the properties/characteristics of an art form. Techniques are the tools and methods used to manipulate materials. Processes are the activities, procedures and investigations artists engage in to make artworks.' }
];

const ART_FORMS = [
  'Painting', 'Drawing', 'Printmaking', 'Sculpture', 'Film', 'Video', 'Ceramics',
  'Sound', 'Photography', 'Performance', 'Textiles', 'Fashion', 'Digital artworks',
  'Interdisciplinary practices', 'Installations', 'Street art'
];

const UNIT1 = {
  id: 'unit1',
  code: 'Unit 1',
  title: 'Interpreting Artworks and Exploring the Creative Practice',
  intro: 'In Unit 1 you use Experiential learning in Making and Responding to explore ideas using the Creative Practice. As the artist and audience, you consider your connection to artworks, and how communication of ideas and presentation of artworks challenge, shape and influence viewer or audience perspectives. You focus on the practices of artists inspired by ideas relating to personal identity, applying the Structural Lens and the Personal Lens.',
  areasOfStudy: [
    {
      id: 'u1aos1',
      title: 'Area of Study 1: Artists, Artworks and Audiences',
      description: 'You are introduced to the Structural and Personal Lenses by researching and analysing three artists, their practices and their artworks. You analyse one artwork by each artist and interpret meanings and messages using the Structural and Personal Lenses, and learn to formulate and substantiate personal opinions about artworks.',
      requirements: [
        'Study the practices of at least three artists',
        'The three artists must be from different periods of time and cultures',
        'Include at least one contemporary artist (working since 2001)',
        'Include at least one Australian artist'
      ],
      outcome: 'On completion of this unit the student should be able to discuss the practices of three artists, and apply the Structural Lens and the Personal Lens to analyse and interpret one artwork by each artist.',
      keyKnowledge: [
        'The practices of artists from different periods of time and cultures',
        'The use of the Structural Lens and the Personal Lens to analyse and interpret artworks',
        'The use of personal opinions and points of view about artworks',
        'The ways artists use visual language to communicate ideas and meaning in their artworks',
        'Terminology used in discussion of artists and their artworks'
      ],
      keySkills: [
        'Analyse and discuss the practices of artists from different periods of time and cultures',
        'Apply relevant aspects of the Structural Lens and the Personal Lens to analyse and interpret artworks',
        'Formulate and justify personal opinions with reference to artworks and related sources',
        'Analyse and discuss how artists use visual language to communicate ideas and meaning in their artworks',
        'Use appropriate art terminology and references to a range of sources in the discussion of artists and their artworks'
      ],
      checklist: [
        'Choose 3 artists from different periods of time and cultures (incl. 1 contemporary, 1 Australian)',
        'Research each artist’s practice and the context they work in',
        'Select one artwork by each artist to analyse',
        'Analyse each artwork using the Structural Lens',
        'Analyse each artwork using the Personal Lens',
        'Write a personal opinion about each artwork, backed up with evidence',
        'Use correct art terminology throughout'
      ],
      assessmentIdeas: [
        'An extended written response',
        'Short-answer responses supported by visual references',
        'An annotated visual report',
        'A presentation using digital technologies such as an online presentation or interactive website',
        'An oral presentation'
      ]
    },
    {
      id: 'u1aos2',
      title: 'Area of Study 2: The Creative Practice',
      description: 'You are introduced to the Creative Practice through Experiential learning activities. You explore at least three art forms, respond to a range of artworks, ideas and the practices of artists through experimentation and exploration, and develop a range of visual responses through a series of tasks.',
      requirements: [
        'Explore at least three different art forms',
        'Investigate the practices of selected artists as inspiration',
        'Finished artworks are not expected — this is about exploration'
      ],
      outcome: 'On completion of this unit the student should be able to use the Creative Practice to develop and make visual responses informed by their exploration of personal interests and ideas.',
      keyKnowledge: [
        'Methods used to experiment with and explore materials, techniques and processes using the Creative Practice',
        'Ways to develop personal visual responses by investigating the practices of artists',
        'The use of visual language to communicate ideas of personal interest',
        'Inherent properties of materials and their use in a range of art forms',
        'The use of materials, techniques and art forms to make personal visual responses',
        'Ways the relationships between the artist, the artwork and the viewer or audience communicate meaning in artworks',
        'The use of the Structural Lens and the Personal Lens to interpret meaning in visual responses'
      ],
      keySkills: [
        'Experiment with and explore materials, techniques and processes using the Creative Practice',
        'Investigate the practices of artists to develop personal visual responses',
        'Use visual language to communicate ideas of personal interest',
        'Explore and experiment with materials, techniques and processes in a range of art forms to make personal visual responses',
        'Explore how the relationships between the artist, the artwork, and the viewer or audience communicate meaning in artworks',
        'Apply the Structural Lens and the Personal Lens to interpret meaning in visual responses'
      ],
      checklist: [
        'Choose 3 art forms to explore',
        'Research one artist’s practice per art form for inspiration',
        'Complete hands-on experiments in each art form in your visual diary',
        'Try a range of materials, techniques and processes in each',
        'Develop personal visual responses connected to something you’re genuinely interested in'
      ],
      assessmentIdeas: [
        'A range of personal visual responses to set tasks, showing exploration of ideas, materials and techniques in at least three art forms'
      ]
    },
    {
      id: 'u1aos3',
      title: 'Area of Study 3: Documenting and Reflecting on the Creative Practice',
      description: 'You develop your art practice by responding to the ways artists conceptualise, develop and make their artworks. You provide annotated documentation of your experiences in Making and Responding, reflecting on the research and exploration undertaken in Area of Study 2.',
      requirements: [
        'Document your use of the Creative Practice in written and visual form',
        'Use the language of the Structural and Personal Lenses in your annotations'
      ],
      outcome: 'On completion of this unit the student should be able to document and evaluate the components of the Creative Practice used to make personal visual responses.',
      keyKnowledge: [
        'Methods used to document and evaluate the use of the Creative Practice',
        'Approaches to making and presenting visual responses that communicate ideas of personal interest',
        'The use of critical and reflective thinking throughout the Creative Practice',
        'Methods used to reflect on and evaluate visual language',
        'Methods used to evaluate the use of materials, techniques and processes in personal visual responses',
        'The use of the Structural Lens and the Personal Lens in annotations to analyse and reflect upon visual responses'
      ],
      keySkills: [
        'Document and evaluate the use of the Creative Practice, using written and visual documentation',
        'Analyse and reflect upon ideas of personal interest communicated in visual responses',
        'Use and document critical and reflective thinking throughout the Creative Practice',
        'Document and evaluate the development of visual language',
        'Document and evaluate the materials, techniques and processes used to make personal visual responses',
        'Apply the Structural Lens and the Personal Lens in annotations to analyse and reflect upon visual responses'
      ],
      checklist: [
        'Annotate your visual diary/experiments with written and visual notes',
        'Reflect using Structural Lens and Personal Lens language',
        'Evaluate the materials, techniques and processes you used',
        'Document your critical and reflective thinking throughout the process',
        'Compile it into a final annotated report'
      ],
      assessmentIdeas: [
        'Students document their use of the Creative Practice, including annotated personal visual responses to a selection of set tasks'
      ]
    }
  ]
};

const UNIT2 = {
  id: 'unit2',
  code: 'Unit 2',
  title: 'Interpreting Artworks and Developing the Creative Practice',
  intro: 'In Unit 2 you use Inquiry learning to investigate the artistic and collaborative practices of artists. You use the Cultural Lens, and the other Interpretive Lenses as appropriate, to examine artworks from different periods of time and cultures, and to explore the different ways artists interpret and communicate social and personal ideas in artworks.',
  areasOfStudy: [
    {
      id: 'u2aos1',
      title: 'Area of Study 1: The Artist, Society and Culture',
      description: 'You focus on the ways art reflects and communicates the values, beliefs and traditions of the societies in which it was created. You apply the Cultural Lens (and other lenses as appropriate) to study the practices of at least three artists from different cultures and times.',
      requirements: [
        'Study at least three artists',
        'Together, the three artists must include: an Aboriginal or Torres Strait Islander person; an artist who collaborates with others (artists, technicians or the audience); an artist from a historical period who used at least one traditional art form and traditional materials/techniques; and a contemporary artist influenced by contemporary ideas, materials, techniques, processes or approaches',
        'One artist can satisfy more than one condition, but all four conditions must be covered'
      ],
      outcome: 'On completion of this unit the student should be able to use the Cultural Lens, and the other Interpretive Lenses as appropriate, to analyse and compare the practices of artists and artworks from different cultures and times.',
      keyKnowledge: [
        'The role and purpose of art in different cultural contexts and times',
        'The use of relevant aspects of the Cultural Lens to analyse and interpret artworks',
        'The use, as appropriate, of relevant aspects of the Structural Lens and the Personal Lens to analyse and interpret artworks',
        'Diverse and alternative approaches to making and presenting artworks',
        'Methods of making and presenting artworks in different historical and contemporary cultural contexts',
        'How artworks reflect the beliefs, values and traditions of different cultures',
        'The different ways that artists collaborate to make artworks',
        'The practices of artists from different periods of time and cultures',
        'Referencing to support the analysis, evaluation and interpretation of artworks',
        'Art terminology used in the analysis, evaluation and comparison of artworks and the practices of artists'
      ],
      keySkills: [
        'Apply the Cultural Lens to analyse and interpret artworks from different cultures and times',
        'Apply, as appropriate, relevant aspects of the Structural Lens and the Personal Lens to analyse and interpret artworks',
        'Compare artworks from different cultural and historical contexts',
        'Analyse diverse and alternative approaches to making and presenting artworks',
        'Analyse methods of making and presenting artworks in historical and contemporary cultural contexts',
        'Analyse how artworks can reflect the beliefs, values and traditions of different cultures',
        'Investigate the different ways that artists collaborate to make artworks',
        'Evaluate and compare the practices of artists from different periods of time and cultures',
        'Use references to artworks to support analysis, evaluation and interpretation',
        'Use appropriate art terminology to analyse, evaluate and compare the practices of artists and artworks'
      ],
      checklist: [
        'Choose 3 artists covering all 4 conditions (Aboriginal or Torres Strait Islander artist; collaborative artist; historical artist using traditional forms; contemporary artist)',
        'Research the role and purpose of art in each artist’s culture/context',
        'Analyse one artwork per artist using the Cultural Lens',
        'Bring in the Structural and/or Personal Lens where relevant',
        'Compare the artists’ practices and approaches',
        'Reference your sources correctly'
      ],
      assessmentIdeas: [
        'An extended written response',
        'Short-answer responses supported by visual references',
        'An annotated visual report',
        'A digital presentation such as an online or interactive presentation',
        'An oral presentation'
      ]
    },
    {
      id: 'u2aos2',
      title: 'Area of Study 2: The Collaborative Creative Practice',
      description: 'You continue to develop your art practice as you explore collaborative practices to make and present artworks — working with other students, practising artists or outside specialists, or creating artworks that involve the audience through interaction and participation. You resolve at least one finished artwork.',
      requirements: [
        'Explore ideas of personal interest related to culture',
        'Use a collaborative approach (with peers, artists/specialists, or audience participation)',
        'Resolve and present at least one finished artwork'
      ],
      outcome: 'On completion of this unit the student should be able to use the Creative Practice to explore social and cultural ideas or issues to make and present at least one finished artwork using collaborative approaches.',
      keyKnowledge: [
        'The use of the Creative Practice to explore social and cultural ideas or issues',
        'The use of the Creative Practice to make and present at least one finished artwork',
        'Collaborative approaches in art practices from different periods of time and cultures',
        'The use of visual language to communicate ideas and issues of social and cultural interest in visual responses',
        'The use of the Cultural Lens, and the other Interpretive Lenses as appropriate, throughout the Creative Practice',
        'The use of traditional and contemporary materials, techniques and processes in art forms to communicate ideas and meaning'
      ],
      keySkills: [
        'Explore social and cultural ideas or issues using the Creative Practice',
        'Make and present at least one finished artwork using the Creative Practice',
        'Reflect on the collaborative practices of artists from different periods of time and cultures throughout the Creative Practice',
        'Explore collaborative approaches to make and present artworks',
        'Develop visual language to communicate ideas and issues of social and cultural interest in visual responses',
        'Use the Cultural Lens, and the other Interpretive Lenses as appropriate, throughout the Creative Practice',
        'Explore and experiment with traditional and contemporary materials, techniques and processes in art forms to communicate ideas and meaning'
      ],
      checklist: [
        'Choose a collaboration approach (peer, artist/specialist, or audience participation)',
        'Pick a social or cultural idea or issue as your starting point',
        'Experiment with materials, techniques, processes and art forms',
        'Develop and resolve at least one finished artwork',
        'Consider how and where the finished artwork will be presented'
      ],
      assessmentIdeas: [
        'Visual responses that demonstrate use of the Creative Practice, collaboration and exploration of personal ideas related to social and cultural contexts',
        'Presentation of at least one finished artwork that realises the student’s intentions and demonstrates refinement of materials, techniques and processes'
      ]
    },
    {
      id: 'u2aos3',
      title: 'Area of Study 3: Documentation of Collaboration Using the Creative Practice',
      description: 'You build on your knowledge and skills, continuing to document your art practice and evaluate your use of visual language. Before finishing your artwork, you present a critique of your use of the Creative Practice, and respond to the feedback you receive to resolve your artwork.',
      requirements: [
        'Present a critique of your work-in-progress before it is finished',
        'Document and annotate using the Cultural Lens (and other lenses as appropriate)',
        'Reflect on how you used collaboration in your art making'
      ],
      outcome: 'On completion of this unit the student should be able to critically reflect on, evaluate and document their use of the Creative Practice to develop and make collaborative visual responses.',
      keyKnowledge: [
        'The use of the Creative Practice to develop and make visual responses that communicate personal ideas related to social and cultural contexts',
        'Collaboration using the Creative Practice',
        'The use of the Cultural Lens, and the other Interpretive Lenses as appropriate, to support reflective annotations',
        'Methods used to document and evaluate the use of the Creative Practice',
        'Ways to effectively communicate cultural and social meaning in artworks',
        'Methods used to critique the use of the Creative Practice',
        'Ways to reflect on and use feedback from a critique to refine and resolve artworks',
        'Art terminology used in a critique and in documentation of the use of the Creative Practice'
      ],
      keySkills: [
        'Critically reflect on the use of the Creative Practice to develop and make visual responses that communicate personal ideas related to social and cultural contexts',
        'Identify, document and reflect on collaboration using the Creative Practice',
        'Apply the Cultural Lens, and the other Interpretive Lenses as appropriate, to support reflective annotations',
        'Evaluate the use of the Creative Practice using visual and written documentation',
        'Explore ideas related to social and cultural contexts through the use of the Creative Practice',
        'Document and evaluate the use of the Creative Practice to develop and make visual responses',
        'Document and evaluate how visual responses effectively communicate social and cultural meaning',
        'Present a critique of the use of the Creative Practice',
        'Reflect on and use feedback from a critique to resolve artworks',
        'Use art terminology to document, annotate and present a critique of the use of the Creative Practice'
      ],
      checklist: [
        'Present a critique of your work-in-progress and gather feedback',
        'Use that feedback to refine and resolve your artwork',
        'Document and annotate your process using the Cultural Lens',
        'Reflect on how you collaborated with others',
        'Evaluate how your finished artwork communicates social/cultural meaning'
      ],
      assessmentIdeas: [
        'Documentation of the Creative Practice, in the form of critical annotations, that presents explorations in selected art forms and demonstrates the development of collaborative practice',
        'A critique of the development of personal ideas, directions, explorations, visual language, technical skills, processes and artworks (can be oral, with written and visual documentation)',
        'Evaluation of the Creative Practice and the presentation of finished artworks',
        'Evaluation of visual responses that effectively communicate social and cultural meaning'
      ]
    }
  ]
};

const STUDIO_PROMPTS = [
  'Make 10 thumbnail sketches of the same object from 10 different angles.',
  'Choose one art principle (e.g. contrast) and create a small piece that relies entirely on it.',
  'Photograph 5 examples of "texture" you find around your house.',
  'Take an existing artwork you admire and remake a tiny section of it in a different material.',
  'Create a piece using only materials you can find in one room, in 20 minutes.',
  'Pick a memory and represent it abstractly using only line and colour — no recognisable objects.',
  'Interview a family member about an object that matters to them, then sketch it from their description.',
  'Make a 1-minute stop-motion or time-lapse of something changing (melting, growing, moving).',
  'Take one colour and find or make 8 different tones/shades of it.',
  'Design a symbol that represents your own identity, then explain 3 choices you made.',
  'Collect 5 "found" objects and arrange them into a mini installation — photograph it from 3 angles.',
  'Pick an artist from your Unit 1 or Unit 2 research and remix one of their techniques with your own subject matter.'
];

const QUIZ_BANK = {
  foundations: [
    { q: 'What are the four components of the Creative Practice?', options: ['Sketch, Paint, Critique, Present', 'Research and Exploration; Experimentation and Development; Refinement and Resolution; Reflection and Evaluation', 'Draft, Edit, Publish, Review', 'Idea, Plan, Make, Sell'], answer: 1, explain: 'The Creative Practice is an iterative cycle of 4 interrelated components — there is no fixed order.' },
    { q: 'Do the four components of the Creative Practice happen in a fixed order?', options: ['Yes, always in the same sequence', 'No — they are interrelated and iterative, and you can start anywhere', 'Only in Unit 2', 'Only when making a finished artwork'], answer: 1, explain: 'The study design is explicit: the components "do not operate in a set sequence" — they interact dynamically.' },
    { q: 'Which lens focuses on art elements, principles, materials, techniques and processes?', options: ['Personal Lens', 'Cultural Lens', 'Structural Lens', 'Historical Lens'], answer: 2, explain: 'The Structural Lens is about how the artwork is physically built and organised.' },
    { q: 'Which lens focuses on the artist’s (or viewer’s) feelings, beliefs and life experiences?', options: ['Structural Lens', 'Personal Lens', 'Cultural Lens', 'Formal Lens'], answer: 1, explain: 'The Personal Lens is about individual experience — the artist’s and your own.' },
    { q: 'Which lens focuses on social, historical, political and cultural context?', options: ['Cultural Lens', 'Personal Lens', 'Structural Lens', 'Technical Lens'], answer: 0, explain: 'The Cultural Lens situates the artwork within its wider social/historical world.' },
    { q: 'What counts as a "contemporary artist" in this study?', options: ['Anyone still alive', 'An artist who produced art in the 21st century (since 2001)', 'An artist under 40', 'Any digital artist'], answer: 1, explain: 'The study design defines contemporary as producing art since 2001.' },
    { q: 'What is "visual language"?', options: ['Sign language used by artists', 'Art elements + art principles + materials/techniques/processes, used to communicate meaning', 'Only the title and artist statement', 'A list of art movements'], answer: 1, explain: 'Visual language is how all these components combine to communicate ideas to an audience.' }
  ],
  unit1: [
    { q: 'In Unit 1, Area of Study 1, how many artists must you study and what is required of them?', options: ['5 artists, all Australian', '3 artists from different periods/cultures, incl. 1 contemporary and 1 Australian artist', '2 artists from the same era', '1 artist studied in depth'], answer: 1, explain: 'AoS1 requires 3 artists from different periods of time and cultures, including at least one contemporary artist and at least one Australian artist.' },
    { q: 'Which two lenses are the focus of Unit 1?', options: ['Structural and Cultural', 'Personal and Cultural', 'Structural and Personal', 'Cultural only'], answer: 2, explain: 'Unit 1 applies the Structural Lens and the Personal Lens.' },
    { q: 'In Unit 1 Area of Study 2, how many art forms must you explore?', options: ['At least 1', 'At least 2', 'At least 3', 'Exactly 5'], answer: 2, explain: 'AoS2 requires exploration of at least three different art forms.' },
    { q: 'Are finished artworks expected in Unit 1, Area of Study 2?', options: ['Yes, one per art form', 'No — exploration and experimentation are the focus, not finished pieces', 'Only for the highest achieving students', 'Yes, but only digital ones'], answer: 1, explain: 'The study design states finished artworks are "not an expectation" of this outcome.' },
    { q: 'What is the focus of Unit 1, Area of Study 3?', options: ['Selling your artwork', 'Documenting and reflecting on your use of the Creative Practice', 'Memorising art history dates', 'Copying a master artist exactly'], answer: 1, explain: 'AoS3 is about annotated documentation and reflection using the Structural and Personal Lenses.' }
  ],
  unit2: [
    { q: 'In Unit 2, Area of Study 1, which FOUR conditions must your three (or more) artists collectively cover?', options: [
      'All must be Victorian artists',
      'An Aboriginal or Torres Strait Islander artist; a collaborative artist; a historical artist using traditional forms; a contemporary artist',
      'All must be painters',
      'All must be deceased'
    ], answer: 1, explain: 'One artist can meet more than one condition, but all four must be covered across your selection.' },
    { q: 'Which lens is the main focus of Unit 2 (while still drawing on the others where relevant)?', options: ['Structural Lens', 'Personal Lens', 'Cultural Lens', 'Digital Lens'], answer: 2, explain: 'Unit 2 centres on the Cultural Lens, while still applying the Structural and Personal Lenses as appropriate.' },
    { q: 'What must Unit 2, Area of Study 2 result in?', options: ['A written essay only', 'At least one finished, resolved artwork made using a collaborative approach', 'A group of 3 unfinished sketches', 'A solo artwork with no collaboration'], answer: 1, explain: 'AoS2 requires resolving and presenting at least one finished artwork through collaboration.' },
    { q: 'What must happen BEFORE you finish your artwork in Unit 2, Area of Study 3?', options: ['Nothing, just submit it', 'A critique, so you can use feedback to refine and resolve the work', 'A written exam', 'Approval from an external gallery'], answer: 1, explain: 'Students present a critique of their use of the Creative Practice before finishing the artwork, and respond to feedback.' },
    { q: 'What are examples of "collaboration" recognised in Unit 2?', options: [
      'Only working with a professional gallery',
      'Working with other students, practising artists/outside specialists, or involving the audience through interaction and participation',
      'Only copying another artist’s work',
      'Working entirely alone but citing an influence'
    ], answer: 1, explain: 'Collaboration is broad — peers, professionals/specialists, or audience participation all count.' }
  ]
};

/* ---------------------------------------------------------------------
   Exam Prep content.
   Units 1 & 2 have NO VCAA exam — assessment is entirely school-based
   (see EXAM_INFO.note). But the Unit 3 & 4 Art Creative Practice written
   examination tests exactly the skills built in Units 1 & 2: applying the
   Interpretive Lenses, analysing art elements/principles, and discussing
   artists you have personally researched. This section previews that exam
   using facts drawn from the real, published VCAA exam structure (2023
   sample exam, 2024 and 2025 papers) — format and skills only. No actual
   exam questions, sources or artwork images are reproduced here; every
   practice prompt below is original, written to match the real pattern.
--------------------------------------------------------------------- */

const EXAM_INFO = {
  note: 'Units 1 and 2 are NOT examined by VCAA — your result is entirely school-based (a Satisfactory/Not Satisfactory call by your teacher). There is no "Unit 1/2 past exam". What follows is a preview of the real Unit 3 & 4 written examination, because the skills it tests are exactly what you are building right now.',
  timing: { reading: 15, writing: 90, totalMarks: 80 },
  sections: [
    {
      name: 'Section A',
      marksRange: '60 marks (6–7 questions)',
      focus: 'Unseen artworks. You are given an insert of artworks (and sometimes short written sources) you have never seen before, and must respond on the spot.',
      taskTypes: [
        'Describe how a named art element and/or art principle has been used in an unseen artwork (short answer, 5–6 marks)',
        'Use a named Interpretive Lens (Structural, Personal or Cultural) to interpret an unseen artwork, referring to details in it (6–8 marks)',
        'Discuss the ideas or issues explored in an unseen artwork by an artist (6–8 marks)',
        'Analyse how an artist\'s use of visual language communicates meaning (8 marks)',
        'Respond to one or two short written sources about an artist\'s practice, identifying or discussing issues raised, referencing both the artwork and the source(s) (13–14 marks)',
        'Use two named lenses to compare the meanings and messages of two unseen artworks, referencing sources provided (16–20 marks)'
      ]
    },
    {
      name: 'Section B',
      marksRange: '20 marks (1–2 questions)',
      focus: 'Artists YOU have studied. No insert — you write from memory about artists and artworks you personally researched during the year, so you must know names, dates, and specific visual details cold.',
      taskTypes: [
        'Discuss the ideas/issues explored by one artist you have studied, applying a named Interpretive Lens, referring to at least one specific artwork (8 marks)',
        'Compare the practices of one historical artist and one contemporary artist you have studied — analysing and interpreting one artwork by each using named Interpretive Lens(es), often covering stylistic qualities, context, and/or life experiences and beliefs (12–20 marks)'
      ]
    }
  ],
  bigTakeaway: 'Section B is the exact skill you are practising right now in the Artist Research Toolkit (Unit 1 & Unit 2, Area of Study 1): pick real artists, know specific artworks by name and date, and be ready to apply a named lens to them from memory. The more detail you bank now, the less you have to cram in Year 12.'
};

const COMMAND_WORDS = [
  { word: 'Describe', meaning: 'State what is there, plainly and specifically — name the element/principle and point to exactly where/how it appears.', tip: 'Lowest-mark, most literal command word. Don\'t interpret meaning yet — just identify and describe.' },
  { word: 'Discuss', meaning: 'Explore an idea from more than one angle, with supporting detail — not just one flat statement.', tip: 'Examiners want you to unpack "why" and "how", not just assert an opinion.' },
  { word: 'Analyse', meaning: 'Break the artwork down into its parts (materials, techniques, elements, principles) and explain how those parts work together to create meaning.', tip: 'Go beyond listing — connect the visual choice to the effect or message it creates.' },
  { word: 'Interpret', meaning: 'Explain what the artwork means or communicates, using a named lens as your framework.', tip: 'Always state which lens you\'re using and use its specific vocabulary (e.g. Structural: elements/principles; Personal: feelings/beliefs; Cultural: context/values).' },
  { word: 'Compare', meaning: 'Discuss similarities AND differences between two (or more) artworks/artists, using the same lens(es) consistently on both.', tip: 'Don\'t describe one artwork then the other in isolation — actively draw connections between them.' },
  { word: 'Identify and discuss', meaning: 'Name the specific issue(s) first, then explain them with evidence.', tip: 'Common in source-based questions — make sure you actually name the issue before discussing it.' },
  { word: 'Evaluate', meaning: 'Make a judgment about how successfully something communicates meaning or achieves its purpose, backed by evidence.', tip: 'Used in your own reflection/critique work (Unit 1 & 2, Area of Study 3) — always justify the judgment.' }
];

const EXAM_PRACTICE = [
  { id: 'ep1', section: 'Section A style', marks: 6, minutes: 8, prompt: 'Choose one artwork from your Unit 1 artist research or your own visual diary. Describe how ONE art element and ONE art principle have been used in it.' },
  { id: 'ep2', section: 'Section A style', marks: 8, minutes: 10, prompt: 'Use the Structural Lens to interpret one artwork by an artist you researched in Unit 1, Area of Study 1. Refer to specific details in the artwork.' },
  { id: 'ep3', section: 'Section A style', marks: 8, minutes: 10, prompt: 'Discuss the ideas or issues explored in an artwork by one of your Unit 2 artists.' },
  { id: 'ep4', section: 'Section A style', marks: 8, minutes: 10, prompt: 'Analyse how an artist\'s use of visual language (elements, principles, materials, techniques, processes) communicates meaning in one artwork you have studied.' },
  { id: 'ep5', section: 'Section A style', marks: 8, minutes: 10, prompt: '"The context of an artwork is the frame of reference that allows the meaning of an artwork to be interpreted." Discuss how context shapes the meaning of one artwork you have researched.' },
  { id: 'ep6', section: 'Section A style', marks: 16, minutes: 20, prompt: 'Use the Structural Lens and the Cultural Lens to compare the meanings and messages in artworks by two of the three artists in your Unit 2 research toolkit.' },
  { id: 'ep7', section: 'Section B style', marks: 8, minutes: 10, prompt: 'Discuss the ideas and issues explored by one artist you have studied this year. Refer to evidence from at least one specific artwork.' },
  { id: 'ep8', section: 'Section B style', marks: 12, minutes: 16, prompt: 'Compare the practices of one historical artist and one contemporary artist you have studied, by analysing and interpreting the meanings and messages of one artwork by each. Apply the Structural Lens and the Cultural Lens.' }
];

QUIZ_BANK.examSkills = [
  { q: 'In the Unit 3 & 4 exam, what does Section A mainly test?', options: ['Only artists you personally researched', 'Your response to unseen artworks (and sometimes sources) you have never seen before', 'Your final Body of Work', 'Group collaboration skills'], answer: 1, explain: 'Section A gives you an insert of unfamiliar artworks to analyse on the spot — roughly 60 of the 80 marks.' },
  { q: 'What does Section B of the exam mainly test?', options: ['Unseen artworks', 'Artists and artworks YOU personally studied during the year', 'Multiple choice art history trivia', 'Your visual diary presentation'], answer: 1, explain: 'Section B has no insert — you write from memory about artists you researched, worth about 20 of the 80 marks.' },
  { q: 'Are Unit 1 and Unit 2 examined by VCAA?', options: ['Yes, every November', 'No — Units 1 and 2 are assessed entirely at school (Satisfactory/Not Satisfactory)', 'Only Unit 2 is examined', 'Only if your school opts in'], answer: 1, explain: 'Only Units 3 & 4 have a VCAA exam. Units 1 & 2 results are school-based and not reported to VCAA as a grade.' },
  { q: 'A question says "Describe how the artist has used colour." What is it actually asking for?', options: ['Your opinion on whether the artwork is good', 'A plain, specific identification of where/how colour appears — no interpretation needed yet', 'A comparison with another artist', 'A critique of the artist\'s career'], answer: 1, explain: '"Describe" is the most literal command word — name it and point to it.' },
  { q: 'A question says "Use the Cultural Lens to interpret this artwork." What must your answer include?', options: ['Only art elements and principles', 'Social, historical, political or cultural context and how it shapes meaning — named explicitly as the Cultural Lens', 'Your personal feelings about the artwork only', 'A biography of the artist with no analysis'], answer: 1, explain: 'Whenever a lens is named, use that lens\'s specific vocabulary and framework, not a different one.' },
  { q: 'Why does building a detailed Artist Research Toolkit in Unit 1 & 2 actually help with the Year 12 exam?', options: ['It doesn\'t — Units 1/2 and 3/4 are unrelated', 'Section B requires you to write from memory about artists you personally studied — the same artists and lens notes from now can be reused', 'Only if you study the exact same artists again in Unit 3/4', 'Because it replaces the need to study in Year 12'], answer: 1, explain: 'The skill — knowing specific artists/artworks in detail and applying a named lens from memory — is identical to what Section B demands.' }
];
