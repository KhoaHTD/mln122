const allQuestions = [
  {
    "question": "What is inheritance?",
    "options": {
      "A": "A mechanism for inheriting characteristics from a parent",
      "B": "A mechanism for sharing and reusing code between classes",
      "C": "A mechanism for sharing data between classes",
      "D": "A mechanism for hiding information between classes"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is a platform-independent model (PIM)?",
    "options": {
      "A": "A software platform before a commitment is made to a specific hardware platform.",
      "B": "A precise model of the software architecture before a commitment is made to a specific platform.",
      "C": "A precise model of the software architecture mapped to a specific platform.",
      "D": "A graphical or textual description of the software."
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is a platform-specific model (PSM)?",
    "options": {
      "A": "A specific hardware platform.",
      "B": "A precise model of the software architecture before a commitment is made to a specific platform.",
      "C": "A precise model of the software architecture mapped to a specific platform.",
      "D": "A graphical or textual description of the software."
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What does UML stand for?",
    "options": {
      "A": "Unified Modeling Language",
      "B": "Universal Modeling Language",
      "C": "Uniform Modeling Language",
      "D": "Unique Modeling Language"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is the primary purpose of Deployment Diagrams in software architecture?",
    "options": {
      "A": "Illustrate the physical distribution of software components",
      "B": "Simplify data modeling",
      "C": "Automate network configurations",
      "D": "Reduce system complexity"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "In UML, what is the purpose of a \"composite structure diagram\"?",
    "options": {
      "A": "To represent the static structure of a system's classes and their relationships.",
      "B": "To illustrate the interactions and collaborations between objects in a system.",
      "C": "To model the organization and behavior of objects within a single classifier.",
      "D": "To depict the flow of control and the partitioning of a system into states and transitions."
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "In a use case diagram, what does an actor represent?",
    "options": {
      "A": "A specific instance of a class in the system",
      "B": "A software component responsible for data storage",
      "C": "An external entity interacting with the system",
      "D": "A method or function within a class"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "Which of the following is NOT a benefit of using software models?",
    "options": {
      "A": "Better communication between stakeholders",
      "B": "Easier maintenance of code",
      "C": "Increased hardware performance",
      "D": "Early detection of design flaws"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is the goal of software validation?",
    "options": {
      "A": "Building the system",
      "B": "Building the right system",
      "C": "Building the system right",
      "D": "Testing the system"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "In the context of software life cycle processes, what does \"maintenance\" typically involve?",
    "options": {
      "A": "Writing initial code",
      "B": "Designing the system architecture",
      "C": "Updating and fixing the software after deployment",
      "D": "Planning the project timeline"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is the signature of an operation?",
    "options": {
      "A": "The operation's name",
      "B": "The operation's function or subroutine",
      "C": "The operation's name, parameters, and return value",
      "D": "The object's interface"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is the main purpose of information hiding in object design?",
    "options": {
      "A": "To make all parts of an object visible to other objects",
      "B": "To decide what information should be visible and what should be hidden",
      "C": "To expose the internal details of an object to other objects",
      "D": "To allow unrestricted access to an object's internals"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "Which of the following is a characteristic of an object?",
    "options": {
      "A": "A function or subroutine",
      "B": "A module",
      "C": "Groups data and procedures that operate on the data",
      "D": "Groups a function and an algorithm"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "The workflows in the USDP include which of the following?",
    "options": {
      "A": "Requirements, analysis, design, implementation, and test",
      "B": "Requirements, analysis, coding, deployment, and testing",
      "C": "Planning, coding, debugging, maintenance, and testing",
      "D": "Requirements, planning, debugging, and maintenance"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "Which component of software architecture ensures scalability and modularity?",
    "options": {
      "A": "Client-Server Model",
      "B": "Monolithic Architecture",
      "C": "Procedural Programming",
      "D": "Testing Frameworks"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is the primary focus of the analysis model?",
    "options": {
      "A": "Designing the user interface",
      "B": "Understanding and analyzing the problem domain",
      "C": "Writing code for the solution",
      "D": "Testing the final system"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What does a use case typically describe in use case modeling?",
    "options": {
      "A": "The internal workings of the system's hardware",
      "B": "The interaction between an actor and the system to achieve a goal",
      "C": "The database schema",
      "D": "The software development methodology"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What can an extension use case be used for?",
    "options": {
      "A": "To describe a lengthy interaction with an actor",
      "B": "To describe functionality that is common to more than one use case",
      "C": "To describe the functionality of a use case that is extended by another use case(s)",
      "D": "To describe a conditional part of a different use case that is only executed under certain circumstances"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is the main purpose of using Use Case Modeling in system development?",
    "options": {
      "A": "Identifying the interactions between users and the system",
      "B": "Developing algorithms for data storage",
      "C": "Automating performance testing",
      "D": "Establishing network protocols"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is a composition hierarchy?",
    "options": {
      "A": "A weak form of a generalization/specialization hierarchy",
      "B": "A strong form of a generalization/specialization hierarchy",
      "C": "A weak form of a whole/part relationship",
      "D": "A strong form of a whole/part relationship"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is an attribute?",
    "options": {
      "A": "A relationship between two classes",
      "B": "A parameter of an operation or method",
      "C": "A data value held by an object in a class",
      "D": "The return value from an operation"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is an entity class?",
    "options": {
      "A": "A class on an entity/relationship diagram",
      "B": "A class that stores data",
      "C": "A class that interfaces to an external entity",
      "D": "An external class"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is the main difference between a class and an interface?",
    "options": {
      "A": "A class can contain implementations of methods, while an interface cannot",
      "B": "An interface can be instantiated, while a class cannot",
      "C": "A class cannot be extended, while an interface can",
      "D": "A class only contains method declarations, while an interface contains method implementations"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is an information hiding object?",
    "options": {
      "A": "An active object that encapsulates data",
      "B": "A passive object that encapsulates data",
      "C": "A class that encapsulates data",
      "D": "A task that encapsulates data"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "Which one of the following is NOT a concept associated with object-oriented programming?",
    "options": {
      "A": "Encapsulation",
      "B": "Class",
      "C": "Subclass",
      "D": "Subroutine"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is the primary purpose of a sequence diagram in UML?",
    "options": {
      "A": "To model the static structure of a system",
      "B": "To represent the flow of data between objects",
      "C": "To describe the interactions between objects over time",
      "D": "To design database schemas"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What does a sequence diagram depict?",
    "options": {
      "A": "The sequence of external objects communicating with each other",
      "B": "Classes and their relationships",
      "C": "Software objects and the sequence of their interactions",
      "D": "The external objects communicating with the system"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is the generic form of an interaction diagram?",
    "options": {
      "A": "Depicts several objects interacting with each other",
      "B": "Depicts one possible sequence of interactions among objects",
      "C": "Depicts all possible interactions among objects",
      "D": "Depicts all classes and their associations with each other"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is the function of finite state machines in software modeling?",
    "options": {
      "A": "Captures system behavior as states and transitions",
      "B": "Defines physical components in system design",
      "C": "Simplifies the coding of software applications",
      "D": "Represents relationships between database entities"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is a state transition into a composite state equivalent to?",
    "options": {
      "A": "A transition into only one of the substates",
      "B": "A transition into each of the substates",
      "C": "A transition into none of the substates",
      "D": "A transition into any one of the substates"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is a state transition out of a composite state equivalent to?",
    "options": {
      "A": "A transition out of only one of the substates",
      "B": "A transition out of each of the substates",
      "C": "A transition out of none of the substates",
      "D": "A transition out of any one of the substates"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "An output message from a state dependent control object corresponds to:",
    "options": {
      "A": "An event on the internal state machine",
      "B": "An action on the internal state machine",
      "C": "A condition on the internal state machine",
      "D": "A state on the internal state machine"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is the significance of using state-dependent dynamic interaction models?",
    "options": {
      "A": "Captures system behavior under different runtime scenarios",
      "B": "Reduces complexity in client-server architectures",
      "C": "Eliminates the need for sequence diagrams",
      "D": "Automates testing frameworks"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "Which of the following could happen on an interaction diagram?",
    "options": {
      "A": "A state-dependent control object sends a message to an entity object.",
      "B": "A state-dependent control object sends a message to a coordinator object.",
      "C": "A state-dependent control object sends a message to a printer object.",
      "D": "All of the above"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "How do architectural communication patterns improve system performance?",
    "options": {
      "A": "By enabling asynchronous messaging and efficient data exchange",
      "B": "By simplifying class diagrams",
      "C": "By automating interaction diagrams",
      "D": "By centralizing deployment diagrams"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What does the software architecture describe?",
    "options": {
      "A": "The software inside a building",
      "B": "The structure of a client/server system",
      "C": "The overall structure of a software system",
      "D": "The software classes and their relationships"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "A software architecture is defined by Bass, Clements, and Kazman, what is it?",
    "options": {
      "A": "The software architecture of a program or computing system is the structure or structures of the system, which comprise software elements, the externally visible properties of those elements, and the relationships among them.",
      "B": "The software architecture of a computer program or system that solves a problem.",
      "C": "The software architecture of a computer program or system that does some basic work for humans",
      "D": "The software architecture of a computer program or system that assists humans in processing information"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What are the typical components of a service subsystem?",
    "options": {
      "A": "Graphical displays and keyboards",
      "B": "Coordinator objects and business logic objects",
      "C": "Standalone, non-composite objects",
      "D": "Multiple threads of control"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is a characteristic of a more complex user interaction subsystem?",
    "options": {
      "A": "It supports a command line interface exclusively",
      "B": "It operates on a single node",
      "C": "It doesn't interface with user I/O devices",
      "D": "It involves multiple windows and multiple threads of control"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "How should an external object be designed to interface to the system?",
    "options": {
      "A": "It should interface to one subsystem",
      "B": "It should interface to several subsystems.",
      "C": "It should interface to every subsystem.",
      "D": "It should interface to none of the subsystems."
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "Which of the following is an entity class?",
    "options": {
      "A": "An information hiding class",
      "B": "A subclass",
      "C": "A control class",
      "D": "A data abstraction class"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "Which of the following is unlikely to be a graphical user interface class?",
    "options": {
      "A": "A menu",
      "B": "A window",
      "C": "A button",
      "D": "A pin"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is a key characteristic of a state-machine class as described in the context?",
    "options": {
      "A": "It exposes the contents of the state transition table for easy access.",
      "B": "It encapsulates the statechart information and hides the state transition table.",
      "C": "It allows multiple statecharts to share the same state-machine class without modifications.",
      "D": "It does not provide operations for processing incoming events"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "With polymorphism and dynamic binding, an object can:",
    "options": {
      "A": "Invoke operation of different names on the same objects.",
      "B": "Invoke operations of different names on different objects.",
      "C": "Invoke an operation of the same name on the same object.",
      "D": "Invoke an operation of the same name on different objects."
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is a database wrapper class?",
    "options": {
      "A": "A class that encapsulates a data structure",
      "B": "A class that encapsulates a database",
      "C": "A class that encapsulates the details of how to access data in a database",
      "D": "A class that encapsulates a relational table"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is a primary concern when designing service-oriented architectures (SOA)?",
    "options": {
      "A": "Loose coupling between components for flexibility",
      "B": "Tight coupling for better performance",
      "C": "Centralized database structure",
      "D": "Reducing the use of APIs"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "With a Negotiation pattern, which of the following is NOT true?",
    "options": {
      "A": "The client agent can propose a service.",
      "B": "The service agent can offer a service in response to a client agent proposal.",
      "C": "The client agent can request a service.",
      "D": "The service agent can offer a service in response to a client agent request"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is a key characteristic of SOA?",
    "options": {
      "A": "Services are dependent on each other",
      "B": "Services are autonomous",
      "C": "Services are not reusable",
      "D": "Services are tightly integrated"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is an advantage of component-based architecture?",
    "options": {
      "A": "Increased development time",
      "B": "Reduced reusability",
      "C": "Enhanced maintainability",
      "D": "Decreased modularity"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is the primary goal of Component-Based Software Architecture (CBSA)?",
    "options": {
      "A": "To create monolithic applications",
      "B": "To enable reuse of software components",
      "C": "To improve hardware efficiency",
      "D": "To simplify the user interface design"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What does a component's provided interface consist of?",
    "options": {
      "A": "The operations that a component must fulfill",
      "B": "The operations inside a component",
      "C": "The operations that a component uses",
      "D": "The operations of a component"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is the difference between an active object and a passive object in Concurrent and Real-Time Software Architecture?",
    "options": {
      "A": "An active object controls a passive object.",
      "B": "An active object does not have a thread of control; a passive object has a thread of control.",
      "C": "An active object executes in a distributed system; a passive object executes in a centralized system.",
      "D": "An active object has a thread of control; a passive object does not have a thread of control"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is a periodic task?",
    "options": {
      "A": "A task that responds to each message it receives",
      "B": "A task that is activated by a timer event",
      "C": "A task that is activated by an external event",
      "D": "A task that is activated by an input event"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "Which of the following is true for a Distributed Control architectural pattern?",
    "options": {
      "A": "Control is divided among various control components.",
      "B": "It responds to multiple requests from client subsystems.",
      "C": "It provides overall control by coordinating several control components.",
      "D": "It provides distributed control over various I/O objects."
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is a use case variation point?",
    "options": {
      "A": "A variable use case",
      "B": "A location in the use case at which change can occur",
      "C": "An alternative use case",
      "D": "A location in the use case where an alternative path can start"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "How are feature conditions used in a SPL state machine?",
    "options": {
      "A": "A guard condition",
      "B": "A condition that is True or False",
      "C": "To identify if a feature is selected or not in the state machine",
      "D": "To allow state machine inheritance"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What does the SPL software architecture describe?",
    "options": {
      "A": "The software inside a family of buildings",
      "B": "The structure of a client/server product family",
      "C": "The overall structure of the software productline",
      "D": "The software product line classes and their relationships"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What do software quality attributes address?",
    "options": {
      "A": "Software functional requirements",
      "B": "Software nonfunctional requirements",
      "C": "Software performance requirements",
      "D": "Software availability requirements"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "Which of the following is not performance-related?",
    "options": {
      "A": "System response time",
      "B": "System throughput",
      "C": "System availability",
      "D": "System capacity"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "Which of the following is considered a software quality attribute?",
    "options": {
      "A": "File organization",
      "B": "Code syntax",
      "C": "Maintainability",
      "D": "User interface design"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is the main function of the COMET methodology in Software Architecture Design?",
    "options": {
      "A": "Focusing on object-oriented methods for modularity",
      "B": "Simplifying data storage",
      "C": "Testing the performance of the system",
      "D": "Automating the coding process"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is the primary purpose of software modeling in the software development process?",
    "options": {
      "A": "To create a visually appealing user interface",
      "B": "To write code and implement software functionality",
      "C": "To document, analyze, and design software systems",
      "D": "To perform software testing and quality assurance"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "In the Waterfall Model, what is the correct order of phases?",
    "options": {
      "A": "Design, Implementation, Testing, Maintenance",
      "B": "Requirements, Design, Implementation, Testing, Deployment, Maintenance",
      "C": "Planning, Design, Execution, Evaluation",
      "D": "Analysis, Development, Deployment, Support"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is \"white box\" testing?",
    "options": {
      "A": "Unit testing",
      "B": "Integration testing",
      "C": "Testing with knowledge of the system internals",
      "D": "Testing without knowledge of the software internals"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What does a use case diagram represent?",
    "options": {
      "A": "The structural relationships between classes",
      "B": "The interactions between the system and its users",
      "C": "The deployment of software components",
      "D": "The sequence of operations"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "How is an actor depicted on a use case diagram?",
    "options": {
      "A": "An oval",
      "B": "A stick figure",
      "C": "A box",
      "D": "A dashed line"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What are software structuring criteria?",
    "options": {
      "A": "Fundamental ideas that can be applied to designing a system.",
      "B": "Systematic approaches for producing a design.",
      "C": "Guidelines used to help in structuring a software system into its components.",
      "D": "Overall plans for developing a design."
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "How is a class depicted on a class diagram?",
    "options": {
      "A": "A box with one compartment",
      "B": "A box with one or two compartments",
      "C": "A box with one, two, or three compartments",
      "D": "An oval"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "Which of the following is the first step in the software design process?",
    "options": {
      "A": "Implementation",
      "B": "Requirement Analysis",
      "C": "Architectural Design",
      "D": "Testing"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is the interface of a class?",
    "options": {
      "A": "The signature of a class",
      "B": "The specification of operations provided by the class",
      "C": "The internals of the class",
      "D": "The implementation of the class"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "In object-oriented programming, which keyword is often used to implement information hiding within a class?",
    "options": {
      "A": "Public",
      "B": "Private",
      "C": "Protected",
      "D": "Static"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "How does information hiding relate to the concept of encapsulation in software engineering?",
    "options": {
      "A": "Information hiding is a different term for the same concept as encapsulation.",
      "B": "Information hiding is a subset of encapsulation, focusing on hiding internal details.",
      "C": "Encapsulation is a subset of information hiding, emphasizing data security.",
      "D": "Information hiding and encapsulation are unrelated concepts in software design."
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is carried out during analysis modeling?",
    "options": {
      "A": "Developing use case models",
      "B": "Developing data flow and entityrelationship diagrams",
      "C": "Developing static and dynamic models",
      "D": "Developing software architectures"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is the COMET life cycle primarily based on?",
    "options": {
      "A": "Prototyping",
      "B": "Use cases",
      "C": "Waterfall model",
      "D": "Spiral model"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is carried out during design modeling?",
    "options": {
      "A": "Developing use case models",
      "B": "Developing data flow and entity relationship diagrams",
      "C": "Developing static and dynamic models",
      "D": "Developing software architectures"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "An activity diagram can therefore be used to provide a more precise description of the use case, because it shows exactly where in the sequence and what the condition is for an alternative sequence to diverge from the main sequence.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What can an activity diagram be used for in use case modeling?",
    "options": {
      "A": "To depict the sequence of activities executed by all the use cases in the system",
      "B": "To depict the sequence of external activities that the use case interacts with",
      "C": "To depict the sequence of active objects in a use case",
      "D": "To depict the activities in the main and alternative sequences of a use case"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is a use case?",
    "options": {
      "A": "A case study involving users",
      "B": "A sequence of interactions between the user and the system",
      "C": "A sequence of interactions between the user and the objects in the system",
      "D": "A sequence of user inputs to the system"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is a generalization/specialization hierarchy?",
    "options": {
      "A": "A whole/part relationship",
      "B": "An inheritance relationship",
      "C": "An association between a generalized class and a specialized class",
      "D": "A layered hierarchy"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is an aggregation hierarchy?",
    "options": {
      "A": "A weak form of a generalization/specialization hierarchy",
      "B": "A strong form of a generalization/specialization hierarchy",
      "C": "A weak form of a whole/part relationship",
      "D": "A strong form of a whole/part relationship"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is a state-dependent control object?",
    "options": {
      "A": "An object that depends on a state machine",
      "B": "An object that communicates with a state machine",
      "C": "An object that controls a state machine",
      "D": "An object that executes a state machine"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is the purpose of a stereotype in class structuring?",
    "options": {
      "A": "To label a class according to its class structuring criterion",
      "B": "To identify the objects that belong to the same class",
      "C": "To distinguish between external objects and software objects",
      "D": "To identify the association between two classes"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is the primary purpose of a dynamic interaction model in software design?",
    "options": {
      "A": "To represent the static structure of a system's classes and their relationships",
      "B": "To illustrate the organization of objects within a single classifier",
      "C": "To depict the high-level functionality of a system",
      "D": "To show the dynamic behavior and interactions between objects or components"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What does a communication diagram depict?",
    "options": {
      "A": "The sequence of external objects communicating with each other",
      "B": "Classes and their relationships",
      "C": "Software objects and the sequence of their interactions",
      "D": "The external objects communicating with the system"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "Which of the following is NOT a type of object interaction diagram?",
    "options": {
      "A": "Sequence Diagram",
      "B": "Collaboration Diagram",
      "C": "Activity Diagram",
      "D": "Communication Diagram"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is a finite state machine?",
    "options": {
      "A": "A machine with infinite states",
      "B": "A machine with finite states",
      "C": "A model of computation",
      "D": "A model of system behavior"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is an entry action in a state machine?",
    "options": {
      "A": "An action that is performed when the state is entered",
      "B": "An action that is performed when the state is left",
      "C": "An action that starts executing when the state is entered and completes executing when the state is left",
      "D": "An action that executes as a result of a state transition"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "How does a composite state relate to a substate?",
    "options": {
      "A": "A composite state is decomposed into substates.",
      "B": "Composite states are composed into substates.",
      "C": "A composite state transitions to a substate.",
      "D": "A substate transitions to a composite state"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is the primary purpose of determining the boundary object(s) in the state-dependent dynamic interaction modeling strategy?",
    "options": {
      "A": "To execute the statechart",
      "B": "To identify alternative sequence scenarios",
      "C": "To specify the interactions between software objects",
      "D": "To consider objects that receive inputs from the external environment"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What does a state-dependent interaction involve?",
    "options": {
      "A": "A control object",
      "B": "A state-dependent entity object",
      "C": "A state-dependent control object",
      "D": "A state-dependent user interaction object"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "An input message to a state-dependent control object corresponds to:",
    "options": {
      "A": "An event on the internal state machine",
      "B": "An action on the internal state machine",
      "C": "A condition on the internal state machine",
      "D": "A state on the internal state machine"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What role do software architectural patterns play in the development of an application?",
    "options": {
      "A": "They specify detailed algorithms for specific tasks",
      "B": "They dictate the user interface design",
      "C": "They provide the skeleton or template for the overall software architecture",
      "D": "They focus on low-level implementation details"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What ensures consistency between a communication diagram and a statechart when modeling state-dependent interaction scenarios?",
    "options": {
      "A": "Using different naming conventions for events and messages.",
      "B": "Assigning unique names to each state in the statechart.",
      "C": "Numbering messages and events in the same sequence across both diagrams.",
      "D": "Defining separate control objects for each diagram."
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is a structural view of a software architecture?",
    "options": {
      "A": "A view in terms of a module hierarchy",
      "B": "A view in terms of components and connectors",
      "C": "A view of the physical configuration in terms of nodes and interconnections",
      "D": "A view in terms of objects and messages"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "Objects that are in geographically different locations should be:",
    "options": {
      "A": "In the same subsystem",
      "B": "In different subsystems",
      "C": "In a composite subsystem",
      "D": "In layered subsystems"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "A user interface subsystem is a type of:",
    "options": {
      "A": "Control subsystem",
      "B": "Service subsystem",
      "C": "Client subsystem",
      "D": "I/O subsystem"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "Which objects should be placed in the same subsystem?",
    "options": {
      "A": "Objects that are associated with each other",
      "B": "Objects that are part of the same composite object",
      "C": "Objects in geographically different locations",
      "D": "Objects that serve different purposes"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "Which of the following is NOT allowed through inheritance?",
    "options": {
      "A": "Subclass inherits attributes from superclass.",
      "B": "Subclass inherits operations from superclass.",
      "C": "Subclass redefines attributes inherited from superclass.",
      "D": "Subclass redefines operations inherited from superclass"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "Which of the following is unlikely to be encapsulated in a business logic class?",
    "options": {
      "A": "A business rule",
      "B": "Calls to operations of an entity class",
      "C": "Deny cash withdrawal if balance of account is less than $10",
      "D": "A dialog box"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "Which of the following is NOT an object-oriented concept?",
    "options": {
      "A": "SubTitle",
      "B": "Information hiding",
      "C": "Class",
      "D": "Inheritance"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "Which of the following statements regarding Server Software Architectures is NOT true?",
    "options": {
      "A": "Server is a requester of services",
      "B": "Server is a provider of services",
      "C": "A software system that provides one or more services for multiple clients",
      "D": "A hardware system that provides one or more services for multiple clients"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "The basic client/single service architectural pattern states that:",
    "options": {
      "A": "Multiple clients request services, and multiple services fulfill client requests.",
      "B": "Multiple clients request services, and a service fulfills client requests.",
      "C": "A client requests services, and a service fulfills client requests.",
      "D": "A client requests services, and multiple services fulfill client requests."
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is the role of a database wrapper in a client/server architecture?",
    "options": {
      "A": "To provide a graphical user interface",
      "B": "To manage client requests",
      "C": "To interface with the database",
      "D": "To perform data encryption"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is a compound transaction?",
    "options": {
      "A": "The compound transaction is indivisible",
      "B": "The compound transaction is atomic.",
      "C": "The compound transaction is decomposed into atomic transactions.",
      "D": "The compound transaction is decomposed into subatomic transactions."
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "Yellow pages brokering is useful when a service requester:",
    "options": {
      "A": "Needs to discover the location of the service",
      "B": "Knows the type of service required but not the specific service",
      "C": "Knows the specific service required but not the type of service",
      "D": "Needs to discover the broker"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is the main role of a broker in SOA?",
    "options": {
      "A": "Manage the resources of services.",
      "B": "Perform services on behalf of the client.",
      "C": "Act as an intermediary between clients and services.",
      "D": "Store detailed information about all clients and services."
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What does a connector join?",
    "options": {
      "A": "The provided port of one component to the required port of another component",
      "B": "The provided port of one component to the provided port of another component",
      "C": "The required port of one component to the provided port of another component",
      "D": "The required port of one component to the required port of another component"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What are the communication characteristics of subscription/notification?",
    "options": {
      "A": "A message sent to several recipients",
      "B": "A message sent to a specific recipient",
      "C": "A message sent to all recipients",
      "D": "A message sent to recipients who have joined a group"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is a component in component-based software architecture?",
    "options": {
      "A": "A function",
      "B": "A class",
      "C": "A database",
      "D": "A reusable piece of software"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is a control task?",
    "options": {
      "A": "A task that control other module",
      "B": "A task that executes a statechart",
      "C": "A task that executes on command",
      "D": "A task that controls I/O service"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "Which of the following is true for a Centralized Control architectural pattern?",
    "options": {
      "A": "Control is divided among various control components.",
      "B": "It provides the overall control and sequencing of the system.",
      "C": "It provides overall control by coordinating several control components.",
      "D": "It provides overall control over various I/O objects."
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is a user interaction task?",
    "options": {
      "A": "A task that interacts with I/O devices",
      "B": "A task that interacts with users",
      "C": "A task that interacts with a user sequentially",
      "D": "A task that interacts with a user concurrently"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is a kernel system in a SPL?",
    "options": {
      "A": "A member of the SPL only composed of kernel classes",
      "B": "A member of the SPL composed of kernel classes and possibly some default classes",
      "C": "A member of the SPL composed of kernel classes and possibly some optional classes",
      "D": "A member of the SPL composed of kernel classes and possibly some entity classes"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is a SPL feature?",
    "options": {
      "A": "A requirement or characteristic that is provided by one or more SPL members",
      "B": "A marketing need",
      "C": "A class provided by the SPL",
      "D": "A SPL use case"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is an optional use case in SPL?",
    "options": {
      "A": "A use case with some optional steps",
      "B": "A use case that does not need to be developed",
      "C": "A use case that is required by some product line members but not others",
      "D": "A use case that can be chosen in place of a different use case in an SPL member"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is testability?",
    "options": {
      "A": "The extent to which software is capable of being developed",
      "B": "The extent to which software is capable of being tested before deployment",
      "C": "The extent to which software is capable of being tested after deployment",
      "D": "The extent which the software is understood"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "Software Quality Attributes, Scalability is the extent to which the system is capable of growing after its initial deployment.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "Which of the following is not addressed by a secure system?",
    "options": {
      "A": "System penetration",
      "B": "Denial of service",
      "C": "System scalability",
      "D": "System authorization"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is the Unified Modeling Language?",
    "options": {
      "A": "A programming language for describing object-oriented models.",
      "B": "A diagramming tool for drawing object-oriented models.",
      "C": "A graphical language for describing object-oriented models.",
      "D": "A standardized graphical language and notation for describing objectoriented models."
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is a software design notation?",
    "options": {
      "A": "Notes about the software design.",
      "B": "A graphical or textual description of the software.",
      "C": "Documentation of the software.",
      "D": "A systematic approach for producing a design."
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What does a statechart diagram depict?",
    "options": {
      "A": "Objects and links",
      "B": "Classes and relationships",
      "C": "Objects and messages",
      "D": "States and events"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What does a deployment diagram depict?",
    "options": {
      "A": "The physical configuration of the system in terms of physical classes and physical connections between the classes",
      "B": "The physical configuration of the system in terms of physical objects and physical connections between the objects",
      "C": "The physical configuration of the system in terms of physical nodes and physical connections between the nodes",
      "D": "The physical configuration of the system in terms of physical computers and physical networks between the computers"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "How is an association depicted on a class diagram?",
    "options": {
      "A": "A solid line joining two class boxes",
      "B": "A dashed line joining two class boxes",
      "C": "A diamond touching the upper class box",
      "D": "An arrowhead touching the upper class box"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "Which of the following is a limitation of the waterfall life cycle model?",
    "options": {
      "A": "Software is developed in phases.",
      "B": "Each phase is completed before the next phase is started.",
      "C": "Software development is cyclic.",
      "D": "Software requirements are not properly tested until a working system is available."
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is \"black box\" testing?",
    "options": {
      "A": "System testing",
      "B": "Integration testing",
      "C": "Testing with knowledge of the system internals",
      "D": "Testing without knowledge of the software internals"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What approach does the spiral model emphasize?",
    "options": {
      "A": "Phased software development",
      "B": "Throwaway prototyping",
      "C": "Risk-driven development",
      "D": "Incremental development"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is data abstraction?",
    "options": {
      "A": "Another name for information hiding",
      "B": "Encapsulating data so that its structure is hidden",
      "C": "Storing data in a database",
      "D": "Storing data in a data structure"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is an operation (also known as method) of a class?",
    "options": {
      "A": "Specification and the implementation of a function performed by a class",
      "B": "Specification and the implementation of a subroutine provided by a class",
      "C": "Specification and the implementation of a function or procedure provided by a class",
      "D": "Specification and the implementation of an interface provided by a class"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is carried out during incremental software construction?",
    "options": {
      "A": "Detailed design and coding of the classes in a subset of the system",
      "B": "Detailed design, coding, and unit testing of the classes in a subset of the system",
      "C": "Coding and unit testing of the classes in a subset of the system",
      "D": "Unit and integration testing of the classes in a subset of the system"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is carried out during system testing?",
    "options": {
      "A": "White box testing",
      "B": "Black box testing",
      "C": "Unit testing",
      "D": "Integration testing"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is carried out during requirements modeling?",
    "options": {
      "A": "Functional requirements of the system are described in terms of functions, inputs, and outputs.",
      "B": "Functional requirements of the system are described in terms of actors and use cases.",
      "C": "Functional requirements of the system are described textually.",
      "D": "Functional requirements of the system are determined by interviewing users."
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is a use case package?",
    "options": {
      "A": "A package describing the actors in the system",
      "B": "A package describing the use cases in the system",
      "C": "A group of related use cases",
      "D": "The package of objects that participate in the use case"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "(Đán án Chuẩn là To describe functionality that iscommon to more than one use case => Nếu có thì bắt buộc chọn)\nC\nWhat is an alternative sequence in a use case?",
    "options": {
      "A": "A sequence that describes an error case",
      "B": "A sequence that is different from the main sequence",
      "C": "A sequence that describes interactions with a secondary actor",
      "D": "A sequence that describes interactions with a primary actor"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is an association class?",
    "options": {
      "A": "A class with multiple associations",
      "B": "A class with one association",
      "C": "A class that models an association between two or more classes",
      "D": "A class that models an association between two or more objects"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is a coordinator object?",
    "options": {
      "A": "A manager object",
      "B": "An object that makes decisions based on a state machine",
      "C": "A decision-making object",
      "D": "An object that decides which entity object to interact with"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What do class structuring criteria help with?",
    "options": {
      "A": "Structuring an application into classes",
      "B": "Defining the attributes of a class",
      "C": "Defining the associations of a class",
      "D": "Defining the operations of a class"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "How is an actor depicted on an interaction diagram?",
    "options": {
      "A": "An actor has an association with the interaction diagram.",
      "B": "An actor can provide input to or receive output from a boundary object.",
      "C": "An actor can provide input to or receive output from a boundary class.",
      "D": "An instance of an actor can provide input to or receive output from a boundary object."
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "Which of the following interactions is NOT likely to happen on an interaction diagram?",
    "options": {
      "A": "A user interaction object sends a message to an entity object.",
      "B": "An input object sends a message to a state-dependent control object.",
      "C": "An input object sends a message to a printer object.",
      "D": "A user interaction object sends a message to a proxy object."
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is the instance form of an interaction diagram?",
    "options": {
      "A": "Depicts several object instances interacting with each other",
      "B": "Depicts one possible sequence of interactions among object instances",
      "C": "Depicts all possible interactions among object instances",
      "D": "Depicts all object instances and their links to each other"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is a state in a state machine?",
    "options": {
      "A": "A recognizable situation that exists over an interval of time",
      "B": "A condition that is True or False",
      "C": "An input from the external environment",
      "D": "An output from the system"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "An interaction diagram should be developed for:",
    "options": {
      "A": "Only the main sequence of the use case",
      "B": "The main sequence and every alternative sequence of the use case",
      "C": "The main sequence and a representative alternative sequence of the use case",
      "D": "The alternative sequences of the use case"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is a dynamic view of a software architecture?",
    "options": {
      "A": "A view in terms of a module hierarchy",
      "B": "A view in terms of components and connectors",
      "C": "A view of the physical configuration in terms of nodes and interconnections",
      "D": "A view in terms of objects and messages"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is a software architectural pattern?",
    "options": {
      "A": "The structure of the major subsystems of a system",
      "B": "The components and connectors in a software architecture",
      "C": "A small group of collaborating objects",
      "D": "A recurring architecture used in a variety of systems"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "A producer sends a message to a consumer. Which one of the following is synchronous message communication with reply?",
    "options": {
      "A": "The producer waits for a response from the consumer.",
      "B": "The producer does not wait for a response from the consumer.",
      "C": "The producer goes to sleep",
      "D": "The producer waits for a timeout"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "When is a control subsystem required?",
    "options": {
      "A": "If the subsystem needs to control several internal objects",
      "B": "If the subsystem needs to control multiple I/O devices",
      "C": "If the subsystem needs to control multiple client subsystems",
      "D": "If the subsystem needs to control the execution of other subsystems"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "Which of the following objects should be assigned to the same subsystem?",
    "options": {
      "A": "Objects that are part of the same composite object",
      "B": "Client and server objects",
      "C": "User interface and entity objects",
      "D": "Objects that are associated with each other"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "Which of the following objects are NOT likely to be in the same subsystem?",
    "options": {
      "A": "User interface object and entity object",
      "B": "State-dependent control object and coordinator object",
      "C": "Business logic object and entity object",
      "D": "I/O object and state-dependent control object"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "How is a concurrent service designed?",
    "options": {
      "A": "One object that responds to requests from clients",
      "B": "Multiple objects that respond to requests from clients",
      "C": "One subsystem that responds to requests from clients",
      "D": "Multiple subsystems that respond to requests from clients"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "When designing an entity class as a relational table, which of the following is NOT true?",
    "options": {
      "A": "The relational table has multiple primary keys.",
      "B": "The relational table has multiple foreign keys.",
      "C": "The relational table has a primary key.",
      "D": "The relational table has a concatenated primary key."
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "How is a sequential service designed?",
    "options": {
      "A": "One object that responds to requests from clients",
      "B": "Multiple objects that respond to requests from clients",
      "C": "One subsystem that responds to requests from clients",
      "D": "Multiple subsystems that respond to requests from clients"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "Which of the following properties DOES NOT apply to a service?",
    "options": {
      "A": "Reusable",
      "B": "Discoverable",
      "C": "Fixed",
      "D": "Autonomous"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is an object broker?",
    "options": {
      "A": "An object that breaks into a system",
      "B": "An object that sends requests to other objects",
      "C": "An object that handles requests sent by other objects",
      "D": "An object that mediates interactions between clients and services"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "In a distributed component-based software architecture, which of the following statements is the most complete description of component deployment?",
    "options": {
      "A": "Component instances can be deployed to different nodes in a geographically distributed environment.",
      "B": "Component instances can be deployed to different nodes in a geographically distributed environment before design.",
      "C": "Component instances can be deployed to different nodes in a geographically distributed environment before implementation.",
      "D": "Component instances can be deployed to different nodes in a geographically distributed environment after design and implementation."
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is broadcast message communication?",
    "options": {
      "A": "A message sent to several recipients",
      "B": "A message sent to a specific recipient",
      "C": "A message sent to all recipients",
      "D": "A message sent to recipients who are members of a group"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is an advantage of localized autonomy in component-based design?",
    "options": {
      "A": "If a component goes down, other components can continue to execute.",
      "B": "Components execute concurrently.",
      "C": "Components are distributed.",
      "D": "Components communicate using messages."
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is an event-driven input task?",
    "options": {
      "A": "A task that executes every few seconds",
      "B": "A task that controls other tasks",
      "C": "A task that receives inputs from an external device when it generates interrupts",
      "D": "A task that checks whether there is new input from an external device"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is a kernel class in a SPL?",
    "options": {
      "A": "An entity class in the SPL",
      "B": "A SPL class that stores essential data",
      "C": "A class that is required by all members of the SPL",
      "D": "An external class to the SPL"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is a software product line (SPL)?",
    "options": {
      "A": "A family of systems with some common components and some variable components",
      "B": "An assembly line",
      "C": "A family of identical systems",
      "D": "The software products marketed by a company"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "Which of the following system problems does availability address?",
    "options": {
      "A": "Denial of service",
      "B": "Single point of failure",
      "C": "System throughput",
      "D": "System penetration"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is reusability?",
    "options": {
      "A": "The extent to which software implementation is reusable",
      "B": "The extent to which the system is capable of growing after its initial deployment",
      "C": "The extent to which SPL technology can be introduced",
      "D": "The extent to which the software is common among a program family"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is an attribute?",
    "options": {
      "A": "A description of a class",
      "B": "An internal property of a class",
      "C": "A data item held by a class",
      "D": "A parameter of a class"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is a primary actor?",
    "options": {
      "A": "The actor who goes on stage first",
      "B": "The actor that starts the use case",
      "C": "An actor that participates in the use case",
      "D": "An object inside the system"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "Which kind of object executes a state machine?",
    "options": {
      "A": "Any software object",
      "B": "An entity object",
      "C": "A state-dependent control object",
      "D": "A state chart"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "When is it particularly useful to use the Broker Handle pattern in place of the Broker Forwarding pattern?",
    "options": {
      "A": "If the client only communicates with the service once",
      "B": "If the client needs to have a dialog with the service",
      "C": "If the client knows the type of service required but not the specific service",
      "D": "If the client needs to provide the broker with a handle"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is software modeling?",
    "options": {
      "A": "Designing software applications after coding",
      "B": "Designing software applications before coding",
      "C": "Writing code for software applications",
      "D": "Debugging software applications"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "Which UML diagram is typically used to show the dynamic behavior of a system, including the sequence of interactions between objects or components?",
    "options": {
      "A": "Class diagram",
      "B": "Use case diagram",
      "C": "Sequence diagram",
      "D": "State diagram"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "In UML notation, an active object is used to represent which of the following?",
    "options": {
      "A": "A non-concurrent object",
      "B": "An attribute of a class",
      "C": "A concurrent object, process, thread, or task",
      "D": "A single-threaded method"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What are the two kinds of UML interaction diagrams?",
    "options": {
      "A": "Class diagram and sequence diagram",
      "B": "Sequence diagram and communication diagram",
      "C": "Class diagram and communication diagram",
      "D": "Statechart and communication diagram"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What does an interaction diagram depict?",
    "options": {
      "A": "Objects and links",
      "B": "Classes and relationships",
      "C": "Objects and messages",
      "D": "States and events"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What does the Waterfall model emphasize?",
    "options": {
      "A": "Iterative development",
      "B": "Parallel testing",
      "C": "Sequential execution of phases",
      "D": "Rapid delivery of software"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is a class?",
    "options": {
      "A": "An object instance",
      "B": "The implementation of the object",
      "C": "A collection of objects with the same characteristics",
      "D": "A collection of objects with different characteristics"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is a software design strategy?",
    "options": {
      "A": "A graphical or textual description of the software.",
      "B": "A fundamental idea that can be applied to designing a system.",
      "C": "A systematic approach for producing a design",
      "D": "An overall plan and direction for developing a design"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "How does the COMET methodology assist in architectural design?",
    "options": {
      "A": "By integrating object-oriented analysis with system-level design",
      "B": "By eliminating state transition diagrams",
      "C": "By reducing complexity in deployment models",
      "D": "By automating software testing"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "Which of the following best describes an \"Actor\" in Use Case Modeling?",
    "options": {
      "A": "A system internal process that performs calculations",
      "B": "A database system that stores application data",
      "C": "A UML diagram that visualizes the software's architecture",
      "D": "An external entity that interacts with the system, such as a user or another system"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is an association?",
    "options": {
      "A": "A relationship between two classes",
      "B": "A relationship between two objects",
      "C": "A link between two classes",
      "D": "A link between two objects"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What does the system context class diagram define?",
    "options": {
      "A": "The entity classes in the system",
      "B": "How the system interfaces to other systems",
      "C": "The boundary between the system and the external environment",
      "D": "The context classes in the system"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is a boundary object?",
    "options": {
      "A": "An external object",
      "B": "An object that stores data",
      "C": "An object that communicates with an external object",
      "D": "An object that controls other objects"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is the primary goal of dynamic interaction modeling?",
    "options": {
      "A": "To illustrate runtime behavior and communication between components",
      "B": "To automate testing processes",
      "C": "To centralize system deployment",
      "D": "To simplify static modeling"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What does an interaction diagram depict?",
    "options": {
      "A": "The state and transitions inside a control object",
      "B": "Classes and their relationships",
      "C": "Software objects and the sequence of their interactions",
      "D": "The external objects communicating with the system"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "How does modeling dynamic interaction assist in designing subsystems?",
    "options": {
      "A": "Captures the message flow between system components",
      "B": "Centralizes object modeling processes",
      "C": "Eliminates the need for state diagrams",
      "D": "Automates testing frameworks"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "An object can send alternative messages a or b to a state-dependent control object. How is this handled in the state machine?",
    "options": {
      "A": "One state with a different transition out of it for each incoming message",
      "B": "One state for each of the alternative messages",
      "C": "A composite state to handle the alternative messages",
      "D": "A substate for each alternative message"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "Which component is crucial for modeling data flow in real-time architectures?",
    "options": {
      "A": "Statechart Diagrams",
      "B": "Use Case Diagrams",
      "C": "Deployment Diagrams",
      "D": "Activity Diagrams"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is the benefit of using hierarchical statecharts in software modeling?",
    "options": {
      "A": "Simplifies complex state transitions into a manageable structure",
      "B": "Eliminates the need for interaction diagrams",
      "C": "Reduces the number of use cases",
      "D": "Automates the coding process"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "If the same state machine is used in more than one use case, how is this modeled on interaction diagrams?",
    "options": {
      "A": "Develop one state-dependent control object for each use case.",
      "B": "Develop one state-dependent control object containing states from each use case.",
      "C": "Develop a hierarchical state machine",
      "D": "Develop a coordinator object"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is the significance of State-Dependent Dynamic Interaction Models in software design?",
    "options": {
      "A": "Helps define system behavior based on input and transitions",
      "B": "Simplifies the coding process",
      "C": "Reduces the need for user documentation",
      "D": "Focuses only on data storage"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is a deployment view of a software architecture?",
    "options": {
      "A": "A static view in terms of a module hierarchy",
      "B": "A static view in terms of components and connectors",
      "C": "A view of the physical configuration in terms of nodes and interconnections",
      "D": "A dynamic interaction view in terms of objects and messages"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is the primary benefit of subsystem partitioning in software architecture?",
    "options": {
      "A": "Simplifies complexity by dividing functionality into independent modules",
      "B": "Centralizes system design processes",
      "C": "Reduces the need for state diagrams",
      "D": "Eliminates UML diagrams"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is the primary purpose of the integrated communication diagram in the software design process?",
    "options": {
      "A": "To depict the static structure of subsystems and their relationships.",
      "B": "To merge all use case-based communication diagrams into a single diagram, showing all message interactions between objects.",
      "C": "To visualize the geographical distribution of subsystems.",
      "D": "To show the sequence of operations for a single use case only."
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What does 'Separation of Concerns' in subsystem design aim to achieve?",
    "options": {
      "A": "To ensure that all subsystems use the same database",
      "B": "To distribute user interface elements evenly across subsystems",
      "C": "To minimize coupling and maximize cohesion within subsystems",
      "D": "To allocate similar programming tasks to the development team"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "Which type of relationship necessitates using a concatenated key as the primary key in an association table?",
    "options": {
      "A": "One-to-one relationship",
      "B": "One-to-many relationship",
      "C": "Many-to-many relationship",
      "D": "Aggregate or composite relationship"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is a primary benefit of using inheritance in software design?",
    "options": {
      "A": "It ensures that all classes in the design are completely identical.",
      "B": "It eliminates the need for architectural design by automating class creation.",
      "C": "It allows for code sharing and incremental modifications during maintenance or reuse.",
      "D": "It enforces strict separation of class characteristics with no overlap."
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "In a Multi-tier Client/Service architectural pattern, which of the following is true about an intermediate tier?",
    "options": {
      "A": "An intermediate tier is a client tier.",
      "B": "An intermediate tier is a service tier.",
      "C": "An intermediate tier is both a control tier and a service tier.",
      "D": "An intermediate tier is both a client tier and a service tier"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "When mapping an aggregation hierarchy to a relational table, which of the following is NOT true?",
    "options": {
      "A": "The aggregate and part tables have different primary keys.",
      "B": "The aggregate and part tables have the same primary key",
      "C": "The primary key of the aggregate table is a foreign key of the part table.",
      "D": "The primary key of the part table is a foreign key of the aggregate table."
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is a service-oriented architecture (SOA)?",
    "options": {
      "A": "A distributed software architecture consisting of multiple related services",
      "B": "A distributed software architecture consisting of multiple autonomous services",
      "C": "A distributed client/service architecture",
      "D": "A distributed software architecture"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is a common approach to securing services in SOA?",
    "options": {
      "A": "Using open access without authentication",
      "B": "Implementing service-level security mechanisms such as OAuth",
      "C": "Relying on client-side security only",
      "D": "Avoiding encryption to reduce overhead"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What does a delegation connector join?",
    "options": {
      "A": "An outer provided port to an inner provided port",
      "B": "An outer provided port to an inner required port",
      "C": "An outer required port to an inner provided port",
      "D": "An outer provided port to an outer required port"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is an integrated communication diagram?",
    "options": {
      "A": "A communication diagram formed by combining objects",
      "B": "A synthesis of all the communication diagrams developed to support the use cases",
      "C": "A communication diagram depicting the objects that realize a use case",
      "D": "A communication diagram that integrates the entity objects from the static model"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "How can a nonfunctional requirement be described in a use case model?",
    "options": {
      "A": "In a separate section of the use case description",
      "B": "As a use case precondition",
      "C": "As a use case postcondition",
      "D": "In a separate document"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is the goal of software verification?",
    "options": {
      "A": "Building the system",
      "B": "Building the right system",
      "C": "Building the system right",
      "D": "Testing the system"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What happens in a Call/Return pattern?",
    "options": {
      "A": "A calling operation in the calling object sends a message to an operation (a.k.a. method) in the called object.",
      "B": "A calling operation in the calling object invokes an operation (a.k.a. method) in the called object.",
      "C": "The calling object waits for a response from the called object.",
      "D": "The calling object does not wait for a response from the called object."
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "Why does a service register with a broker?",
    "options": {
      "A": "So that service requesters can discover it",
      "B": "So that a service can interrogate the broker",
      "C": "So that the registry is up to date",
      "D": "So that the service can relocate"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What does a state machine class encapsulate?",
    "options": {
      "A": "A state transition table",
      "B": "A state chart",
      "C": "The current state of the machine",
      "D": "A state transition table and the current state of the machine"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is a condition used for in a state machine?",
    "options": {
      "A": "A conditional action",
      "B": "A conditional state",
      "C": "A conditional state transition",
      "D": "A conditional event"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "When is a coordinator subsystem required?",
    "options": {
      "A": "If the subsystem needs to coordinate several internal objects",
      "B": "If the subsystem needs to coordinate multiple I/O devices",
      "C": "If the subsystem receives messages from multiple client subsystems",
      "D": "If the subsystem needs to coordinate the execution of other subsystems"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is a timer object?",
    "options": {
      "A": "An external clock",
      "B": "An internal clock",
      "C": "An object that is awakened by an external timer",
      "D": "An object that interacts with a clock"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "Which of the following is true for an abstract class?",
    "options": {
      "A": "It is used as a template for creating objects.",
      "B": "It is used as a template for creating subclasses.",
      "C": "It is used as a template for creating classes.",
      "D": "It is used as a template for creating super classes."
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is meant by the multiplicity of an association?",
    "options": {
      "A": "The number of associations in a class",
      "B": "The number of associations between two classes",
      "C": "How many instances of one class relate to how many instances of another class",
      "D": "How many instances of one class relate to a single instance of another class"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is information hiding in software design?",
    "options": {
      "A": "Hiding information so that it cannot be found",
      "B": "Hiding a design decision that is considered likely to change",
      "C": "Hiding information to make it secure",
      "D": "Encapsulating data in a class"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is a software design concept?",
    "options": {
      "A": "A graphical or textual description of the software.",
      "B": "Documentation of the software.",
      "C": "A fundamental idea that can be applied to designing a system.",
      "D": "A systematic approach for producing a design."
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "In object-oriented design, polymorphism means that:",
    "options": {
      "A": "Different classes may have the same name.",
      "B": "Different classes may have the same interface name.",
      "C": "Different classes may have the same superclass name",
      "D": "Different classes may have the same operation name."
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "How would two state-dependent control objects communicate with each other?",
    "options": {
      "A": "By sending messages to each other",
      "B": "By transitioning to the same state",
      "C": "Through an entity object",
      "D": "Through a proxy object"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "Which of the following statements is NOT true for a component?",
    "options": {
      "A": "A composite object composed of other objects",
      "B": "An operation",
      "C": "A simple object",
      "D": "Provides an interface"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "In a system in which a client object executes a state machine and communicates with a service, which of the following is true?",
    "options": {
      "A": "The client has a state-dependent control object but the service does not.",
      "B": "The service has a state-dependent control object but the client does not",
      "C": "Both the client and the service have state-dependent control objects.",
      "D": "Neither the client nor the service has a state-dependent control object."
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "How is public visibility depicted for a class element on a class diagram?",
    "options": {
      "A": "+ sign",
      "B": "- sign",
      "C": "#sign",
      "D": "*sign"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "During dynamic interaction modeling, use cases are realized as follows:",
    "options": {
      "A": "Determine objects that participate in each use case and the sequence of interactions among them.",
      "B": "Determine external objects and the sequence in which they provide inputs to and receive outputs from each use case.",
      "C": "Determine sequence of interactions among use cases.",
      "D": "Determine how a use case is depicted through internal states and transitions between them."
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is carried out during incremental software integration?",
    "options": {
      "A": "Implementation of the classes in each software increment",
      "B": "Unit testing of the classes in each software increment",
      "C": "Integration testing of the classes in each software increment",
      "D": "System testing of the classes in each software increment"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "Which of the following is true for a Hierarchical Control architectural pattern?",
    "options": {
      "A": "Control is divided among various control components.",
      "B": "It provides overall control over several client subsystems",
      "C": "It provides overall control by coordinating several control components.",
      "D": "It provides overall control over various I/O objects."
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is maintainability?",
    "options": {
      "A": "The extent to which software is capable of being changed before deployment",
      "B": "The extent to which software is capable of being changed after deployment",
      "C": "The extent to which software is capable of being changed during development",
      "D": "The extent to which software is capable of being changed after development"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is an action in a state machine?",
    "options": {
      "A": "An occurrence at a point in time",
      "B": "A cause of a state transition",
      "C": "An interval between two successive events",
      "D": "A computation that executes as a result of a state transition"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is the classification process for application classes analogous to?",
    "options": {
      "A": "Categorizing books in a library",
      "B": "Deciding how many copies of a book are needed",
      "C": "Finding the classrooms in a school",
      "D": "Identifying what labs the school has"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "How is a use case depicted on a use case diagram?",
    "options": {
      "A": "An oval",
      "B": "A stick figure",
      "C": "A box",
      "D": "A dashed line"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is the waterfall life cycle model?",
    "options": {
      "A": "Software developed under a waterfall",
      "B": "A process model in which each phase is completed before the next phase is started",
      "C": "A process model in which phases are overlapped",
      "D": "A process model in which phases are cyclic"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is a business logic object?",
    "options": {
      "A": "An object used in business applications",
      "B": "An object that defines business specific application logic",
      "C": "The internal logic of an object",
      "D": "A business object that determines whether a client request is logical"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "Which of the following interactions could happen on an interaction diagram?",
    "options": {
      "A": "An external user sends a message to a user interaction object.",
      "B": "An external user sends a message to an entity object.",
      "C": "An external user sends a message to an I/O object.",
      "D": "An external user sends a message to a printer object."
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "A producer sends a message to a consumer. Which one of the following is asynchronous message communication?",
    "options": {
      "A": "The producer waits for a response from the consumer.",
      "B": "The producer does not wait for a response from the consumer.",
      "C": "The producer goes to sleep.",
      "D": "The producer waits for a timeout."
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What happens in a Layers of Abstraction pattern?",
    "options": {
      "A": "Each layer uses services in the layer immediately below it.",
      "B": "Each layer uses services in the layer immediately above it.",
      "C": "Each layer uses services in the layers immediately above it and below it.",
      "D": "Each layer is independent of the other layers."
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "If scope of control is used in subsystem structuring, then:",
    "options": {
      "A": "A user interface object is placed in the same subsystem as an entity object it updates",
      "B": "A state-dependent control object is placed in the same subsystem as the objects it controls.",
      "C": "A state-dependent control object is placed in a different subsystem from the objects it controls.",
      "D": "A user interface object is placed in a different subsystem from an entity object it updates"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "Which of the following subsystems is NOT likely to be a client subsystem?",
    "options": {
      "A": "Control subsystem",
      "B": "User interaction subsystem",
      "C": "Service subsystem",
      "D": "I/O subsystem"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is a demand-driven task?",
    "options": {
      "A": "A task that responds to each message it receives",
      "B": "A task that is activated by an internal message or event from another task",
      "C": "A task that is activated by an external event",
      "D": "A task that is activated by an input event"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is a SPL feature group?",
    "options": {
      "A": "A collection of features",
      "B": "A group of features with a partiular constraint on their usage in a SPL member",
      "C": "A group of mutually exclusive features",
      "D": "A group of optional features with a particular constraint on their usage in a SPL member"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What two categories of stereotypes are used in modeling SPL classes?",
    "options": {
      "A": "Kernel and optional stereotypes",
      "B": "Optional and variant stereotypes",
      "C": "Common and variant stereotypes",
      "D": "Reuse and application role stereotypes"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "is scalability?",
    "options": {
      "A": "The extent to which an application can grow",
      "B": "The extent to which the system is capable of growing after its initial deployment",
      "C": "The extent to which the system is capable of growing during development",
      "D": "The extent to which the system is capable of being scaled"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "If two actions are shown on a given state transition, which of the following is true?",
    "options": {
      "A": "The two actions are dependent on each other.",
      "B": "The two actions are independent of each other.",
      "C": "One action provides an input to the other action.",
      "D": "The second action executes when the first action completes execution."
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is a software design method?",
    "options": {
      "A": "A systematic approach for producing a design.",
      "B": "Guidelines used to help in structuring a software system into its components.",
      "C": "An overall plan for developing a design.",
      "D": "A graphical or textual description of the software."
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is a software life cycle?",
    "options": {
      "A": "The life of the software",
      "B": "A cyclic approach to developing software",
      "C": "A phased approach to developing software",
      "D": "The life of software developed in cycles"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is a secondary actor?",
    "options": {
      "A": "The actor who goes on stage second",
      "B": "The actor that starts the use case",
      "C": "An actor that participates in the use case",
      "D": "An object inside the system"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "How would you determine a boundary class from the context diagram?",
    "options": {
      "A": "By looking at it",
      "B": "By selecting the external classes on the context diagram",
      "C": "By determining the software classes that communicate with the external classes",
      "D": "By drawing the boundary between the hardware and software classes"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "Which of the following is NOT an object-oriented concept?",
    "options": {
      "A": "Information hiding",
      "B": "Class",
      "C": "Subclass",
      "D": "Subroutine"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is a class interface?",
    "options": {
      "A": "Specifies the internals of the operations of a class",
      "B": "Specifies the externally visible operations of a class",
      "C": "Specifies the parameters of a class operation.",
      "D": "Specifies the signature of a class operation"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "When mapping a generalization/specialization relationship to a relational database, which of the following is NOT possible?",
    "options": {
      "A": "The superclass and each subclass are designed as relational tables.",
      "B": "Only subclasses are designed as relational tables",
      "C": "The aggregate and part classes are designed as relational tables.",
      "D": "Only the superclass is designed as a relational table."
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is a server?",
    "options": {
      "A": "A hardware/software system that serves customers",
      "B": "A subsystem that makes requests and waits for the responses",
      "C": "A subsystem that responds to requests from clients",
      "D": "A hardware/software system that provides one or more services for multiple clients"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What does a component's required interface consist of?",
    "options": {
      "A": "The operations that a component must fulfill",
      "B": "The operations inside a component",
      "C": "The operations that a component uses",
      "D": "The visible operations of a component"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is the difference between an active object and a passive object?",
    "options": {
      "A": "An active object controls a passive object.",
      "B": "An active object does not have a thread of control; a passive object has a thread of control.",
      "C": "An active object executes in a distributed system; a passive object executes in a centralized system.",
      "D": "An active object has a thread of control; a passive object does not have a thread of control."
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What is modifiability?",
    "options": {
      "A": "The extent to which software is capable of being modified after deployment",
      "B": "The extent to which software is capable of being modified after initial development",
      "C": "The extent to which software is capable of being modified during and after initial development",
      "D": "The extent to which software is capable of being changed before deployment"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is an exit action in a state machine?",
    "options": {
      "A": "An action that is performed when the state is entered",
      "B": "An action that is performed when the state is left",
      "C": "An action that starts executing when the state is entered and completes executing when the state is left",
      "D": "An action that executes as a result of a state transition"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "What is a software architecture?",
    "options": {
      "A": "The software inside a building.",
      "B": "The structure of a client/server system.",
      "C": "The overall structure of a software system.",
      "D": "The software classes and their relationships."
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is evolutionary prototyping?",
    "options": {
      "A": "Phased software development",
      "B": "Throwaway prototyping",
      "C": "Risk-driven development",
      "D": "Incremental development"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "During application deployment",
    "options": {
      "A": "The application is executed.",
      "B": "Component instances are executed.",
      "C": "Component instances are assigned to hardware nodes.",
      "D": "Component instances are instantiated."
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "Traceability is the extent to which a product:",
    "options": {
      "A": "Can be traced back to products of previous phases",
      "B": "Traced back to the requirements",
      "C": "Traced forward to implementation",
      "D": "Deployed to a hardware configuration"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is a control object?",
    "options": {
      "A": "An object that depends on other objects",
      "B": "An object that communicates with an external object",
      "C": "An object that controls other objects",
      "D": "An object that is controlled by other objects"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What kind of object would be the first object to receive an input from an external object?",
    "options": {
      "A": "A user interaction object",
      "B": "A proxy object",
      "C": "An entity object",
      "D": "A boundary object"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "What does a component interface consist of?",
    "options": {
      "A": "The externally visible operations of a component",
      "B": "The operations provided by a component",
      "C": "The operations required by a component",
      "D": "The operations that a component supports"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is a transaction?",
    "options": {
      "A": "Consists of two or more operations",
      "B": "Consists of one operation",
      "C": "Consists of two or more operations that are indivisible",
      "D": "Consists of two or more operations that are divisible"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "What is an event in a state machine?",
    "options": {
      "A": "A discrete signal that causes a change of state",
      "B": "An input from the external environment",
      "C": "An input that is True or False",
      "D": "The result of a state transition"
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "What is a UML package?",
    "options": {
      "A": "A box",
      "B": "A grouping of classes",
      "C": "A grouping of use cases",
      "D": "A grouping of model elements"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "(Đán án chuẩn là The class is called by the interface => Nếu có thì chọn )\nB\nWhat is an actor in a use case?",
    "options": {
      "A": "The customer to whom the system will be delivered",
      "B": "An external entity that interacts with the system",
      "C": "A person who performs on stage",
      "D": "An object inside the system"
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "In a SOA, which of the following is NOT true?",
    "options": {
      "A": "A client communicates with a specific service provided on a fixed server configuration.",
      "B": "A client discovers and links to a service.",
      "C": "Multiple clients communicate with a service.",
      "D": "Standard protocols are provided to allow clients to communicate with services."
    },
    "answer": "A",
    "explanation": ""
  },
  {
    "question": "Which of the following approaches can overcome the limitation in the previous question?",
    "options": {
      "A": "Phased software development",
      "B": "Throwaway prototyping",
      "C": "Evolutionary prototyping",
      "D": "Incremental development"
    },
    "answer": "D",
    "explanation": ""
  },
  {
    "question": "Which of the following are object-oriented concepts?",
    "options": {
      "A": "Modules and interfaces",
      "B": "Modules and information hiding",
      "C": "Classes, information hiding, and inheritance",
      "D": "Concurrency and information hiding"
    },
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "How is Multiple Client/Multiple Service architectural pattern different from a Multiple Client/Single Service architectural pattern?",
    "options": {
      "A": "A service can receive requests from multiple clients.",
      "B": "A client can send requests to multiple services.",
      "C": "A client can send requests to other clients.",
      "D": "A service can respond to requests from multiple clients."
    },
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "Which of the following is NOT a case of event synchronization?",
    "options": {
      "A": "External event",
      "B": "Internal event",
      "C": "Timer event",
      "D": "User event"
    },
    "answer": "D",
    "explanation": ""
  }
];