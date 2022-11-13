
import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  const food = props.food;
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <p>Total Calories: FOOD_CALORIES * FOOD_SERVINGS </p> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;