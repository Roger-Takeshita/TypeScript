import { AutoBind } from '../decorators/autobind.js';
import { projectState } from '../state/project-state.js';
import { Validatable, validate } from '../util/validation.js';
import { Component } from './base-component.js';

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input');
        this.titleInputElement = this.element.querySelector(
            '#title'
        )! as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector(
            '#description'
        )! as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector(
            '#people'
        )! as HTMLInputElement;

        this.configure();
    }

    // create an eventListener to to submit
    configure() {
        // this.element.addEventListener('submit', this.submitHandler.bind(this));
        // this.element.addEventListener('submit', () => this.submitHandler);
        this.element.addEventListener('submit', this.submitHandler);
    }

    renderContent() {}

    private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        // if (
        //     enteredTitle.trim().length === 0 ||
        //     enteredDescription.trim().length === 0 ||
        //     enteredPeople.trim().length === 0
        // ) {
        //     alert('Invalid input, please try again');
        //     return;
        // }

        const titleValidatable: Validatable = {
            value: enteredTitle,
            required: true,
        };
        const descriptionValidatable: Validatable = {
            value: enteredDescription,
            required: true,
            minLength: 5,
        };
        const peopleValidatable: Validatable = {
            value: enteredTitle,
            required: true,
            min: 1,
            max: 5,
        };

        if (
            !validate(titleValidatable) ||
            !validate(descriptionValidatable) ||
            !validate(peopleValidatable)
        ) {
            alert('Invalid input, please try again');
            return;
        }

        return [enteredTitle, enteredDescription, +enteredPeople];
    }

    @AutoBind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();

        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput;
            projectState.addProject(title, description, people);
            this.clearInputs();
        }
    }
}
