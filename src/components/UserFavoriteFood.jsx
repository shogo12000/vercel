

function UserFavoriteFood(props){
    const { foods, working } = props;

    console.log(foods);
    console.log(working)

    const myFoods = foods.map((n,i)=>{        
        return <li key={i}>{n}</li>
    })
    return (
        <section>
            {working?<h1>Funcionando</h1>:<h1>Fechado</h1>}
            <span>Favorite Food:</span>
            <br />
            <ul>
                {myFoods}
            </ul>
        </section>
    )
}

export default UserFavoriteFood;