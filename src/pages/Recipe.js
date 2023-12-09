import React from "react"
import { CardGroup, CardHeader, Card, CardBody, CardText, CardTitle } from "reactstrap"
const Recipe = () => {
  return(
    <main className="content-position">
      <CardHeader style={{
        color: "rgb(4, 193, 218)",
        fontSize: "2rem"
      }}>
        Lemon Blueberry Dutch Baby
      </CardHeader>
      <CardGroup>
        <Card style={{
          backgroundColor: "rgb(4, 193, 218)"
        }}>
          <CardBody>
            <CardTitle tag="h5">
              Ingredients
            </CardTitle>
              <ul className="line-items">
                <li>4 tablespoons butter</li>
                <li>1/2 cup milk</li>
                <li>1/2 cup all-purpose flour</li>
                <li>4 large eggs</li>
                <li>3 tablespoons brown sugar</li>
                <li>1 teaspoon vanilla</li>
                <li>1/4 teaspoon salt</li>
                <li>the zest of one lemon</li>
                <li>1 cup blueberries</li>
              </ul>
          </CardBody>
        </Card>
        <Card style={{
          backgroundColor: "rgb(4, 193, 218)"
        }}>
          <CardBody>
            <CardTitle tag="h5">
              Instructions
            </CardTitle>
              <ol className="line-items">
                <li>Preheat the oven to 450°F</li>
                <li>Place cast iron skillet over low heat on your stovetop</li>
                <li>Mix together the milk, eggs, vanilla</li>
                <li>Mix together the flour, brown sugar, salt, and lemon zest</li>
                <li>Blend the wet mixture into the dry mixture until smooth.</li>
                <li>Melt the butter in the cast iron skillet on medium-high heat</li>
                <li>Add the blueberries to the skillet</li>
                <li>Immediately pour the batter over the blueberries</li>
                <li>Bake until the pancake is puffed and golden, about 15 minutes</li>
              </ol>
          </CardBody>
        </Card>
      </CardGroup>
    </main>
  )
}

export default Recipe