import classes from './MealItemForm.module.css'

import Input from '../../UI/input';

const MealItemForm = props => {
    return (
    <form className={classes.form}>
       <Input label="Amount" input={{
        id:'Amount',
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
       }} />
        <button>+ ADD</button>
    </form>
    );
}

export default MealItemForm;