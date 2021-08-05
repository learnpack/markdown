import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { markdown } from './data.js';

import { MarkdownParser } from '../src/index';

import { text, boolean, number, array, object, select } from '@storybook/addon-knobs';



/**
 *  MarkdownParser
 */

storiesOf('MarkdownParser', module).add('default configuration', () => (
    <div className="row mt-5">
      <div className="col-12 col-sm-8 col-lg-6 mx-auto">
        <MarkdownParser 
            commentMarker={text('commentMarker','')} 
            context={object('context',{ foo: "var" })} 
            source={text('source',markdown)} 
        />
      </div>
    </div>
), {
    knobs: {
      escapeHTML: false
    }
  });

storiesOf('MarkdownParser', module).add('template manager (variables)', () => (
    <div className="row mt-5">
      <div className="col-12 col-sm-8 col-lg-6 mx-auto">
        <MarkdownParser 
            commentMarker={text('commentMarker','')} 
            context={object('context',{ foo: "var" })} 
            source={text('source',"This is markdown, the variable **{{ foo }}** is being loaded as template manager")} 
        />
      </div>
    </div>
), {
    knobs: {
      escapeHTML: false
    }
  });

storiesOf('MarkdownParser', module).add('jumps of lines', () => (
    <div className="row mt-5">
      <div className="col-12 col-sm-8 col-lg-6 mx-auto">
        <MarkdownParser 
            commentMarker={text('commentMarker','')} 
            context={object('context',{ foo: "var" })} 
            source={text('source',`
Test your code by running \`$ pipenv run test\`

## 📝 Instructions

\`\`\`python
1) Create the code needed to implement the API endpoints described further below.  
\`\`\`

2) The only two files you have to edit are:  

	- src/datastructure.py: Contains the class with the rules on how to manage the fammily members.  
	
	- src/app.py: Contains the API, it uses the Family as datastructure. 
	
3) We have prepared a set of automated tests that will give you an idea if your code is correct, run the tests by typing \`$ pipenv run tests\` on the command line.  
 `)} 
        />
      </div>
    </div>
), {
    knobs: {
      escapeHTML: false
    }
  });
