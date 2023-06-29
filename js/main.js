const App = {
    data(){
        return {
            title: "< Polycode />",
            homeMessage: "An easy way to learn to code the same thing, \n in different languages.",
            contents: ['Declare Variables', 'Comments', 'Concatenation', 'Interpolation', 'Prompting', 'Conditionals', 'Operators', 'Functions', 'Objetcs'],
            subContents: {
                functions: ['Writing functions', 'Regular functions', 'Array Methods', 'Mathemathical methods'],
                objetcs: "",
            },
            languages: ['js', 'php', 'py'],
            chosenSection: "",
            chosenLanguage: "",
            display: "",
            js: {
                declare: {
                    prefix: "const or let",
                    name: "value",
                    synthax: "camelCase",
                    example: [
                        "// declare a value that isn't set to evolve & will remain unchanged",
                        "const name = 'value'",
                        "// declare a value that can be modified overtime",
                        "let variableName = 'variable value';"
                    ]
                },
                comments: {
                    content: [
                        "// Commenting on a single line",
                        "/* Commenting \n on mutiple \n lines*/"
                    ]
                },
                concatenation: {
                    content: [
                        `let value1 = "a value";`,
                        `let value2 = "another value";`,
                        `// method 1`,
                        `console.log(value1, "&", value2); // prints "a value & another value"`,
                        `// method 2`,
                        `console.log(value1 + " & " + value2); // prints "a value & another value"`
                    ]
                },
                interpolation: {
                    content: [
                        `let stringToInsert = "a string I want to insert";`,
                        "console.log(`this is ${stringToInsert}`)"
                    ]
                },
                prompting: {
                    content: [
                        "const readline = require('readline');",
                        "const rl = readline.createInterface ({",
                        "    input: process.stdin,",
                        "    output: process.stdout,",
                        "})",
                        `rl.prompt("What is your name?");`,
                        `rl.line('line', answerHandler(input) => {`,
                        `    console.log('name : ', input)`,
                        "})"
                    ]
                },
                conditionals: {
                    content: [
                        "if(condition) {",
                        "    // code",
                        "} else {",
                        "    // code",
                        "}"
                    ]
                },
                operators: {
                    content: [
                        "// AND : ",
                        "condition1 && condition2",
                        "// OR : ",
                        "condition1 || condition2",
                        "// IS NOT : ",
                        "!condition"
                    ]
                },
                functions: {
                    titles: ['Writing functions', 'Regular functions', 'Array Methods', 'Mathemathical methods'],
                    content: [
                        "This section is currently under construction"
                    ],
                },
                objects: {
                    content: [
                        "This section is currently under construction"
                    ],
                }
            },
            php: {
                declare: {
                    prefix: "$",
                    name: "value",
                    synthax: "snake_case",
                    example: [
                        "$name = 'value';",
                        "$variable_name = 'variable value';"
                    ]
                },
                comments: {
                    content: [
                        "// Commenting on a single line",
                        "/* Commenting \n on mutiple \n lines*/"
                    ]
                },
                concatenation: {
                    content: [
                        `$value1 = "a value";`,
                        `$value2 = "another value";`,
                        `echo $value1 . " & " . $value2; // prints "a value & another value"`
                    ]
                },
                interpolation: {
                    content: [
                        "// normal interpolation",
                        `$string_to_insert = "another string I want to insert";`,
                        `echo "this is $string_to_insert"; # prints "this is another string I want to insert"`,
                        "// second method",
                        `$second_string = "here is another example";`,
                        `$last_string = "more example"`,
                        `echo "this $second_string, there are {$last_string}s"; # prints " this here is another example, there are more examples"`
                    ]
                },
                prompting: {
                    content: [
                        `echo "What is your name?";`,
                        `readline(">>");`
                    ]
                },
                conditionals: {
                    content: [
                        "if(condition) {",
                        "    // code",
                        "} else {",
                        "    // code",
                        "}"
                    ]
                },
                operators: {
                    content: [
                        "// AND :",
                        "condition1 && condition2",
                        "// OR :",
                        "condition1 || condition2",
                        "// IS NOT :",
                        "!condition"
                    ]
                },
                functions: {
                    titles: ['Writing functions', 'Regular functions', 'Array Methods', 'Mathemathical methods'],
                    content: [
                        "This section is currently under construction"
                    ],
                },
                objects: {
                    content: [
                        "This section is currently under construction"
                    ],
                }
            },
            py: {
                declare: {
                    prefix: "none",
                    name: "value",
                    synthax: "snake_case",
                    example: [
                        "name = 'value'"
                    ]
                },
                comments: {
                    content: [
                        "# Commenting on a single line",
                        `"""`,
                        "This is a multi line string",
                        "but since it is not assigned to a variable",
                        "Python will read it as a comment",
                        "written on mutiple lines",
                        `"""`
                    ]
                },
                concatenation: {
                    content: [
                        `value1 = "a value"`,
                        `value2 = "another value"`,
                        `# method 1`,
                        `print(value1, "&", value2) # prints "a value & another value"`,
                        `# method 2`,
                        `print(value1 + " & " + value2); # prints "a value & another value"`
                    ]
                },
                prompting: {
                    content: [
                        `user_input = input("What is your name?")`    
                    ]
                },
                conditionals: {
                    content: [
                        "if condition :",
                        "    // code",
                        "else :",
                        "    // code"
                    ]
                },
                operators: {
                    content: [
                        "// AND : ",
                        "condition1 and condition2",
                        "// OR : ",
                        "condition1 or condition2",
                        "// IS NOT : ",
                        "not condition"
                    ]
                },
                functions: {
                    titles: ['Writing functions', 'Regular functions', 'Array Methods', 'Mathemathical methods'],
                    content: [
                        "This section is currently under construction"
                    ],
                },
                objects: {
                    content: [
                        "This section is currently under construction"
                    ],
                }
            }
        }
    },
    methods:{
        //* CHOOSING SECTION TO DISPLAY
        getSection(event) {
            console.log(event.srcElement.childNodes[0]);
            console.log(event.srcElement.childNodes[0].textContent);
            //! replaced by :
            const content = event.srcElement.childNodes[0].textContent.trim();
            console.log(content);
            document.querySelector('.instructions').textContent = content;
            document.querySelector('.instructions').style.fontSize = '25px';
            document.querySelector('.languages').style.display = 'initial';
            document.querySelector('.content--display').style.display = 'inherit';
            this.chosenSection = content;
            console.log('chosen content : ', this.chosenSection);
            this.display = "Choose a language"
            console.log('display : ', this.display);
            console.log('type of display : ', typeof(this.display));
        },
        //* CHOOSING LANGUAGE
        getLanguage(event) {
            const content = event.target.textContent.toLowerCase();
            console.log(content)
            this.chosenLanguage = content;
            console.log('selected language : ', this.chosenLanguage);
            switch (this.chosenLanguage) {
                case 'js':
                    if (this.chosenSection === 'Declare Variables') {
                        console.log(this.js.declare);
                        return this.display = this.js.declare
                    } else {
                        console.log(this.js[this.chosenSection.toLowerCase()]);
                        return this.display = this.js[this.chosenSection.toLowerCase()]
                    }
                    break;
                case 'php':
                    if (this.chosenSection === 'Declare Variables') {
                        console.log(this.php.declare);
                        return this.display = this.php.declare
                    } else {
                        console.log(this.php[this.chosenSection.toLowerCase()]);
                        return this.display = this.php[this.chosenSection.toLowerCase()]
                    }
                    break;
                case 'py':
                    if (this.chosenSection === 'Declare Variables') {
                        console.log(this.py.declare);
                        return this.display = this.py.declare
                    } else {
                        console.log(this.py[this.chosenSection.toLowerCase()]);
                        return this.display = this.py[this.chosenSection.toLowerCase()]
                    }
                default:
                    break;
            }
        },
        //* CHANGING BACKGROUND VIEW
        changeView(event) {
            console.log(event);
            let setup = document.querySelector('.display--visual').style;
            const button = event.srcElement;
            console.log(button);
            console.log(setup);
            if (setup.backgroundImage === "url(\"img/Polycode_OldDisplay.png\")") {
                console.log('is equal');
                setup.backgroundImage = `url(img/Polycode_NewDisplay.png)`
            } else if(setup.backgroundImage === "") {
                setup.backgroundImage = `url(img/Polycode_NewDisplay.png)`
            } else {
                setup.backgroundImage = `url(img/Polycode_OldDisplay.png)`
                console.log('is not equal');
            }
        }
    }
}
Vue.createApp(App).mount("#app");
