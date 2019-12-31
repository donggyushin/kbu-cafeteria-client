import React from 'react'
import Presenter from './presenter'
import { IMenu } from '../../../types'

interface IStateTypes {
    year: number
    month: number
    days: number
    offdays: number
    menuObjects: IMenu[]
    form: boolean
    selectedCell: IMenu
}

class Container extends React.Component {
    state: IStateTypes = {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        days: 0,
        offdays: 0,
        menuObjects: [],
        form: false,
        selectedCell: {
            day: 0,
            dinner: {
                menus: []
            },
            lunch: {
                menus: []
            }
        }
    }

    componentDidMount() {
        const {
            year,
            month,
        } = this.state

        this.setDaysAndOffDays(year, month)
    }

    render() {
        const {
            year,
            month,
            offdays,
            menuObjects,
            form,
            selectedCell
        } = this.state
        const {
            onClickCell
        } = this;
        return <Presenter
            year={year}
            month={month}
            offdays={offdays}
            menuObjects={menuObjects}
            onClickCell={onClickCell}
            form={form}
            selectedCell={selectedCell}
        />
    }

    onClickCell = (day: number): void => {
        const { menuObjects } = this.state
        const clickedCells: IMenu[] = menuObjects.filter(menu => {
            if (menu.day === day) return true
        })
        const clickedCell: IMenu = clickedCells[0]
        this.setState({
            form: true,
            selectedCell: clickedCell
        })
    }

    setMenuObjects = (days: number) => {

        const menuObjects: IMenu[] = []

        for (let index = 0; index < days + 1; index++) {

            const menuObject: IMenu = {
                day: index + 1,
                lunch: {
                    menus: []
                },
                dinner: {
                    menus: []
                }
            }

            menuObjects.push(menuObject)

        }

        this.setState({
            menuObjects
        })

    }

    setDaysAndOffDays = (year: number, month: number): void => {

        // 이번달의 첫날이 무슨 요일인지 구한다.
        const week = ['일', '월', '화', '수', '목', '금', '토']
        const dayOfWeek = week[new Date(year, month, 1).getDay()];
        const offdays = this.getOffDays(dayOfWeek)
        const days = new Date(year, month, 0).getDate()


        this.setState({
            days,
            offdays
        })

        this.setMenuObjects(days)
    }

    getOffDays = (dayOfWeek: string): number => {
        let offdays = 0

        switch (dayOfWeek) {
            case '일':
                offdays = 0
                break;
            case '월':
                offdays = 1
                break;
            case '화':
                offdays = 2
                break;
            case '수':
                offdays = 3
                break;
            case '목':
                offdays = 4
                break;
            case '금':
                offdays = 5
                break;
            case '토':
                offdays = 6
                break;

            default:
                break;
        }

        return offdays
    }
}

export default Container