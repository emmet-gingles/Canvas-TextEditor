let radius;              // radius of circle       
let x, y;                // x and y coordinates of circle
let circleColour;        // colour of circle
let bgColour;            // background colour of canvas           
let button;              // button that changes canvas background
let circleSlider;        // slider that changes the circle size 
let textSlider;          // slider that changes the text size 
let selectCircleColour;  // dropdown menu for selecting the circle colour
let textInput;           // input box
let textP;               // pargaraph that outputs textInput's value
let font;                // dropdown menu for setting the font
let textColour;          // dropdown menu for setting the text colour
let textDecoration;      // radio button group for setting the text decoration
let fontStyle;           // radio button group for setting the font style


function setup() 
{
  // create a canvas 400px wide and 200px high
  canvas = createCanvas(400, 200);
  
  // initialize background colour
  bgColour = color(200);
  // initialize x to y to midpoint of canvas
  x = width/2;
  y = height/2;
  
  // create button to change background colour of canvas
  button = createButton("Change background");
  // set button's position on canvas
  button.position(10, 220);
  // add a mouse pressed event to button
  button.mousePressed(changeBackground);
  
  
  // create a drop down menu to change the colour of the circle
  selectCircleColour = createSelect();
  // add options to drop down menu
  selectCircleColour.option("Blue");
  selectCircleColour.option("Green");
  selectCircleColour.option("Red");
  selectCircleColour.option("Yellow");
  selectCircleColour.option("Orange");
  selectCircleColour.option("Purple");
  // set default value
  selectCircleColour.selected("Red");
  // set its position on canvas
  selectCircleColour.position(260, 220);
  // create a label and set its position
  createElement("label", "Circle colour").position(160, 220);
  
  
  // create a slider to change the radius of the circle 
  circleSlider = createSlider(10, 50, 25);
  // assign slider to the class slider
  circleSlider.attribute("class", "slider");
  circleSlider.position(100, 250);
  createElement("label","Circle size").position(10, 250);

  
  // create a textbox
  textInput = createInput('');
  // set its placeholder text
  textInput.attribute("placeholder", "Enter some text");
  textInput.position(10, 280);
  // assign onchange event to textbox
  textInput.changed(setText);
  
  
  // create a slider to change the size of the text
  textSlider = createSlider(10, 30, 15);
  textSlider.attribute("class", "slider");
  textSlider.position(100, 310);
  textSlider.changed(setTextSize);
  createElement("label","Text size").position(10, 310);
  
  
  // create a drop down menu to change the font of the text 
  font = createSelect();
  font.option("Arial");
  font.option("Courier");
  font.option("Roboto");
  font.option("Sans-serif");
  font.option("Serif");
  font.option("Verdana");
  font.selected("Serif");
  font.position(100, 340);
  font.changed(setFont);
  createElement("label","Font").position(10, 340);

  
  // create a drop down menu to change the colour of the text 
  textColour = createSelect();
  textColour.option("Black");
  textColour.option("Blue");
  textColour.option("Green");
  textColour.option("Orange");
  textColour.option("Purple");
  textColour.option("Red");
  textColour.position(100, 370);
  textColour.changed(setTextColour);
  createElement("label","Text colour").position(10, 370);
  
  
  // create a radio button list to set the text decoration
  textDecoration = createRadio(); 
  textDecoration.option("none");
  textDecoration.option("underline");
  textDecoration.option("line-through");
  textDecoration.selected("none");
  textDecoration.position(120, 400);
  textDecoration.changed(setTextDecoration);
  createElement("label", "Text decoration").position(10, 400);
  
  
  // create a radio button list to set the font style
  fontStyle = createRadio();
  fontStyle.option("normal");
  fontStyle.option("bold");
  fontStyle.option("italic");
  fontStyle.selected("normal");
  fontStyle.position(120, 430);
  fontStyle.changed(setFontStyle);
  createElement("label", "Font style").position(10, 430);
  
  
  // create a paragraph to store the text input
  textP = createP("").position(10, 460);
}


function draw() 
{
  // change the background colour
  background(bgColour);
  // assign selected value to the circle colour
  circleColour = selectCircleColour.value();
  
  // set the colour of the circle to its value using switch statement
  switch(circleColour) 
  {
    case "Red":
      fill(255, 0, 0);
      break;
    case "Green":
      fill(0, 255, 0);
      break;
    case "Blue":
      fill(0, 0, 255);
      break;
    case "Yellow":
      fill(255, 255, 0);
      break;
    case "Orange":
      fill(255, 165, 0);
      break;
    case "Purple":
      fill(128, 0, 128);
      break;
  }


  // assign selected slider value to radius
  radius = circleSlider.value();
  // draw circle
  ellipse(x, y, radius*2, radius*2);
  
  // set the paragraph's text to whatever is input
  textP.html(textInput.value());
  
  // if up arrow is pressed
  if(keyIsDown(UP_ARROW))
  {
    // check circle is not above the canvas
    if(y - radius > 0)
    {
      // move circle up
      y--;
    }
  }
  // if down arrow is pressed
  else if(keyIsDown(DOWN_ARROW))
  {
    // check circle is not below the canvas
    if(y + radius < height)
    {
      // move circle down
      y++;
    }
  }
  // if left arrow is pressed
  else if(keyIsDown(LEFT_ARROW))
  {
    // check circle is not to the left of the canvas
    if(x - radius > 0)
    {
      // move circle left
      x--;
    }
  }
  // if right arrow is pressed
  else if(keyIsDown(RIGHT_ARROW))
  {
    // check circle is not to the right the canvas
    if(x + radius < width)
    {
      // move circle right
      x++;
    }
  }
}


function changeCircleColour()
{
  // assign the selected value to the circle's colour
  circleColour = selectCircleColour.value();
}


function changeBackground()
{
  // change the canvas background to a random colour
  bgColour = color(random(255));  
}


function setText()
{
  // change the paragraph text to whatever was input
  textP.html(textInput.value());
}


function setTextSize()
{
  // change the paragraph's text size to the selected value 
  textP.style("font-size", textSlider.value()+"px");
}


function setFont()
{
  // change the paragraph's font to the selected value 
  textP.style("font-family", font.value()); 
}


function setTextColour()
{
  // change the paragraph's text colour to the selected value 
  textP.style("color", textColour.value()); 
}


function setTextDecoration() 
{
  // set the paragraph's text decoration to the selected value
  textP.style("text-decoration", textDecoration.value()); 
}


function setFontStyle()
{
  // if the selected value is "bold"
  if(fontStyle.value() == "bold")
  {
    // set the paragraph's font weight to "bold"
    textP.style("font-weight", "bold"); 
    // set its font style to normal
    textP.style("font-style", "normal");
  }
  else
  {
    // set the paragraph's font style to the selected value
    textP.style("font-style", fontStyle.value());
    // set its font weight to normal
    textP.style("font-weight", "normal"); 
  }    
}

