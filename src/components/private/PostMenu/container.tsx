import React from 'react'
import Presenter from './presenter'
import { IMenu, IState, ILunch } from '../../../types'
import { connect } from 'react-redux'
import { fetchMenus } from '../../../actions/menu'

interface IStateTypes {
    year: number
    month: number
    days: number
    offdays: number
    form: boolean
    selectedCell: IMenu
    newLunch: string
    newDinner: string
}

interface IProps {
    fetchMenus: (year: number, month: number) => void
    menus: IMenu[]
    loading: boolean
}

class Container extends React.Component<IProps> {
    state: IStateTypes = {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        days: 0,
        offdays: 0,
        form: false,
        selectedCell: {
            _id: "",
            day: 0,
            year: 0,
            month: 0,
            dinner: {
                _id: "",
                menus: []
            },
            lunch: {
                _id: "",
                menus: []
            }
        },
        newLunch: "",
        newDinner: ""
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
            form,
            selectedCell,
            newLunch,
            newDinner
        } = this.state
        const {
            onClickCell,
            xbuttonClicked,
            addNewMenu,
            handleNewMenuInput
        } = this;
        const {
            menus,
            loading
        } = this.props;
        return <Presenter
            year={year}
            month={month}
            offdays={offdays}
            menuObjects={menus}
            onClickCell={onClickCell}
            form={form}
            selectedCell={selectedCell}
            loading={loading}
            xbuttonClicked={xbuttonClicked}
            addNewMenu={addNewMenu}
            newLunch={newLunch}
            newDinner={newDinner}
            handleNewMenuInput={handleNewMenuInput}
        />
    }

    handleNewMenuInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name: string = event.target.name
        const value: string = event.target.value
        this.setState({
            [name]: value
        })
    }

    addNewMenu = (event: React.KeyboardEvent<HTMLInputElement>, name: string) => {
        const key = event.key
        const { selectedCell } = this.state
        if (key === 'Enter') {
            // 새로운 메뉴 추가
            console.log("Enter Clicked")
            console.log('name: ', name)
            console.log('selected menu: ', selectedCell)


            this.setState({
                newLunch: "",
                newDinner: ""
            })
        }
    }

    xbuttonClicked = (): void => {
        this.setState({
            form: false,
            selectedCell: {
                _id: "",
                day: 0,
                year: 0,
                month: 0,
                dinner: {
                    _id: "",
                    menus: []
                },
                lunch: {
                    _id: "",
                    menus: []
                }
            }
        })
    }

    onClickCell = (id: string): void => {

        const clickedCells: IMenu[] = this.props.menus.filter(menu => {
            if (menu._id === id) {
                return true
            } else {
                return false
            }
        })
        const clickedCell: IMenu = clickedCells[0]
        this.setState({
            selectedCell: clickedCell,
            form: true
        })
    }

    setMenuObjects = (year: number, month: number) => {
        this.props.fetchMenus(year, month)
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

        this.setMenuObjects(year, month)

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

const mapStateToProps = (state: IState) => {
    return {
        menus: state.menu.menus,
        loading: state.menu.loading
    }
}

export default connect(mapStateToProps, {
    fetchMenus
})(Container)