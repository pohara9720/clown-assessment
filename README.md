# Starting Clown Application

Clone repository and run

### `yarn`

To install dependencies. Once dependencies are installed run
### `yarn start`

This should open the application on localhost:3000

The application is simple using a custom wizard component with 3 steps to input clown information and then bringing you to /clowns page which will list the clowns. 

I was hoping to spin up a seperate backend server but for time constraints I decided to utilize local storage. 

Retrospective thoughts. 

1) There are some components that have their own file which are just exporting a styled component. For something this small ideally these components would have more logic behind them but i wanted to highlight how I would go about breaking the application up into components. 

2) With more time I would have liked to actually handle forms properly with validation etc.

3) I created a seperate palette file but ideally this would be done through styled components theme provider instead.

4) I would have liked to make the clown list page and the summary page a little more nice looking but the wizard took up more time than I was expecting. 

5) I would have liked to pay more attention to some of the types as well.

6) I got carried away and forgot to commit regularly so this will all be in one commit which would not be ideal in a real world situation. Normally my PRs and commits are reasonably sized and easy to review. 

7) I would have liked to leave more comments if this was a collaborative project. Especially to explain the reasoning or descriptions behind some of the components and/or functions.

Library justification. 

I tried to go barebones and not install too many libraries. Outside of the dependencies that come with the boiler plate I install 3 libraries. 

1) React Router - I installed this because I wanted to have 2 seperate routes do register a clown and list a clown and React Router is best practive and most commonly used library for routing.
2) Styled Components - styled components I love. It allows you to manipulate your css with js very easily and I believe it seperates the files clearly and keeps the component nice and clean in the return. I also find the JSX to be much more readable without numerous condition classname attributes.
3) Styled-Tools - this package I could have done without it is just a collection of methods that work well with styled components. I could have written these methods myself but due to time constraints I thought itd be quicker to just install them.