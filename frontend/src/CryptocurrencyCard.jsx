import React from 'react';
import { Card, Space } from 'antd';


function CryptocurrencyCard(props) {

    const {currency} = props 
  
    return(
        <div>
            <Card
                title ={
                    <div className='flex items-center gap-3'>
                        <img src ={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}/>
                        <span>{currency.name}</span>
                    </div>
                }
                style={{
                    width: 300,
                }}
            >
                <p>Текущая цена: {currency.quote.USD.price}$</p>    
                <p>Изменение цены за 24 часа: </p>    
                <p>Текущая капитализация: </p>    
            </Card>    
        </div>
    )
};
export default CryptocurrencyCard;