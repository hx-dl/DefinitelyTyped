declare module 'inquirer-tree-prompt' {
  import { Answers, PromptBase, Question } from 'inquirer';
  import { Interface as ReadlineInterface } from 'readline';

  export interface TreeNode {
    name?: string;
    value?: string;
    short?: string;
    children?: TreeNode[] | (() => Promise<TreeNode[]>);
    open?: boolean;
    isValid?: boolean;
    parent?: TreeNode;
  }  

  export interface TreePromptOptions<T extends Answers = Answers> extends Partial<Omit<Question<T>, 'type'>> {
    type: 'tree';
    tree: TreeNode[] | (() => Promise<TreeNode[]>);
    pageSize?: number;
    multiple?: boolean;
    validate?: (input: string, answers?: Answers) => boolean | string | Promise<boolean | string>;
    transformer?: (input: string, answers?: Answers, flags?: { isFinal: boolean }) => string;
    onlyShowValid?: boolean;
    hideChildrenOfValid?: boolean;
    loop?: boolean;
  }

  export default class TreePrompt<T extends Answers> extends PromptBase<T> {

    constructor(questions: TreePromptOptions, rl: ReadlineInterface, answers: Answers):PromptBase

     /**
     * Gets or sets a string which represents the state of the prompt.
     */
     status: PromptState;

     /**
      * Runs the prompt.
      *
      * @returns
      * The result of the prompt.
      */
     run(): Promise<any>;
  }
}
