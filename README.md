Brock Spacek
3/14/25
Tip Calculator
Description: 

Peer Review: Michael Heckerman

Comments: Site looks pretty close to the provided images. It does seem to be sitting a little close to the bottom of the screen, maybe try to add or remove some margin to get it to sit up more. On all the inputs you can enter 'e, E, +, -'.
You could add an onKeyDown event that looks something like "onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}", that way the user can no longer enter them. Also noticed that you haven't hosted you site yet and you might want to name your project in your index.html. All in all the site looks good and just a few adjustments and it should be perfect. 
