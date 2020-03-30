import React from 'react'
import styled from 'styled-components'
import { IMenu } from '../../../../../types'
import Form from './Form'
import List from './List'
import DailyMenuForm from './DailyMenuFormContainer'
import FixMenuForm from './FixMenuForm'
import TextField from '@material-ui/core/TextField';
import './styles.css'

interface IProps {
    menu: IMenu
    addNewMenu: (event: React.KeyboardEvent<HTMLDivElement>, name: string) => void
    newLunch: string
    newDinner: string
    handleNewMenuInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    deleteMenu: (name: string, index: number) => void
    newDaily: string
    newFix: string
    handlePrice: (event: React.ChangeEvent<HTMLInputElement>) => void
    dailyPrice: number
    fixPrice: number
    dailyPriceInputEnterPressed: (event: React.KeyboardEvent<HTMLInputElement>) => void
    dailyPriceXButtonTapped: (index: number) => void
    fixPriceInputEnterPressed: (event: React.KeyboardEvent<HTMLInputElement>) => void
    fixPriceXButtonTapped: (index: number) => void
}

const Container = styled.div`
    width:80%;
    display:flex;
    flex-direction:column;
`

const ListContainer = styled.div`
    display:flex;
`

const Presenter: React.FC<IProps> = ({
    menu,
    addNewMenu,
    newLunch,
    newDinner,
    handleNewMenuInput,
    deleteMenu,
    newDaily,
    newFix,
    handlePrice,
    dailyPrice,
    fixPrice,
    dailyPriceInputEnterPressed,
    dailyPriceXButtonTapped,
    fixPriceInputEnterPressed,
    fixPriceXButtonTapped
}) => {
    return <Container>
        <Form
            addNewMenu={addNewMenu}
            newLunch={newLunch}
            newDinner={newDinner}
            handleNewMenuInput={handleNewMenuInput}
        />
        <div className="lunchPriceAndDinnerPriceContainer">
            <TextField onChange={handlePrice} name="lunchPrice" label="중식가격" type="number" value={menu.lunchPrice} />
            <TextField onChange={handlePrice} name="dinnerPrice" label="석식가격" type="number" value={menu.dinnerPrice} />
        </div>
        <ListContainer>
            <List
                menus={menu.lunch.menus}
                deleteMenu={deleteMenu}
                name={'lunch'}
            />
            <List menus={menu.dinner.menus}
                deleteMenu={deleteMenu}
                name={'dinner'}
            />
        </ListContainer>
        <ListContainer>
            <DailyMenuForm
                addNewMenu={addNewMenu}
                newDaily={newDaily}
                handleNewMenuInput={handleNewMenuInput}
                dailyMenus={menu.daily.menus}
                deleteMenu={deleteMenu}
            />
            <FixMenuForm
                addNewMenu={addNewMenu}
                newFix={newFix}
                fixMenus={menu.fix.menus}
                deleteMenu={deleteMenu}
                handleNewMenuInput={handleNewMenuInput}
            />
        </ListContainer>
        <div className="dailyAndFixPricesContainer">
            <TextField type="number" onKeyDown={dailyPriceInputEnterPressed} onChange={handleNewMenuInput} name="dailyPrice" label="데일리 가격" value={dailyPrice} />
            <TextField type="number" onKeyDown={fixPriceInputEnterPressed} onChange={handleNewMenuInput} name="fixPrice" label="고정메뉴 가격" value={fixPrice} />
        </div>
        <div className="dailyAndFixPriceArrayContainer">
            <div className="dailyPricesContainer">
                {menu.dailyPrices.map((price, index) => {
                    return <div className={"price_container"} key={index}>
                        <div className="price">{price}</div>
                        <div className="x" onClick={() => {
                            dailyPriceXButtonTapped(index)
                        }}>x</div>
                    </div>
                })}
            </div>
            <div className="fixPricesContainer">
                {menu.fixPrices.map((price, index) => {
                    return <div className="price_container" key={index}>
                        <div className="price">{price}</div>
                        <div onClick={() => {
                            fixPriceXButtonTapped(index)
                        }} className="x">x</div>
                    </div>
                })}
            </div>
        </div>
    </Container>
}

export default Presenter