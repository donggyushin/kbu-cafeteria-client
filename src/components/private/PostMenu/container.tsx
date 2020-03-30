import React from 'react'
import Presenter from './presenter'
import { IMenu, IState, ILunch } from '../../../types'
import { connect } from 'react-redux'
import { fetchMenus, putNewMenu } from '../../../actions/menu'

interface IStateTypes {
    year: number
    month: number
    days: number
    offdays: number
    form: boolean
    selectedCell: IMenu
    newLunch: string
    newDinner: string
    newFix: string
    newDaily: string
    dailyPrice: number
    fixPrice: number
}

interface IProps {
    fetchMenus: (year: number, month: number) => void
    menus: IMenu[]
    loading: boolean
    putNewMenu: (menu: IMenu) => void
}

class Container extends React.Component<IProps, IStateTypes> {
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
            dinnerPrice: 3000,
            lunch: {
                _id: "",
                menus: []
            },
            lunchPrice: 3000,
            fix: {
                _id: "",
                menus: []
            },
            fixPrices: [],
            daily: {
                _id: "",
                menus: []
            },
            dailyPrices: []
        },
        newLunch: "",
        newDinner: "",
        newDaily: "",
        newFix: "",
        dailyPrice: 0,
        fixPrice: 0
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
            newDinner,
            newDaily,
            newFix,
            dailyPrice,
            fixPrice
        } = this.state
        const {
            onClickCell,
            xbuttonClicked,
            addNewMenu,
            handleNewMenuInput,
            deleteMenu,
            submitButtonClicked,
            rightArrowClicked,
            leftArrowClicked
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
            deleteMenu={deleteMenu}
            submitButtonClicked={submitButtonClicked}
            rightArrowClicked={rightArrowClicked}
            leftArrowClicked={leftArrowClicked}
            newDaily={newDaily}
            newFix={newFix}
            handlePrice={this.handlePrice}
            dailyPrice={dailyPrice}
            fixPrice={fixPrice}
            dailyPriceInputEnterPressed={this.dailyPriceInputEnterPressed}
            dailyPriceXButtonTapped={this.dailyPriceXButtonTapped}
            fixPriceInputEnterPressed={this.fixPriceInputEnterPressed}
            fixPriceXButtonTapped={this.fixPriceXButtonTapped}
        />
    }

    fixPriceXButtonTapped = (index: number) => {
        const updatedFixPrices = this.state.selectedCell.fixPrices.filter((price, index2) => {
            if (index == index2) {
                return false
            } else {
                return true
            }
        })
        this.setState({
            ...this.state,
            selectedCell: {
                ...this.state.selectedCell,
                fixPrices: updatedFixPrices
            }
        })
    }

    dailyPriceXButtonTapped = (index: number) => {
        const updatedDailyPrices = this.state.selectedCell.dailyPrices.filter((price, index2) => {
            if (index == index2) {
                return false
            } else {
                return true
            }
        })
        this.setState({
            ...this.state,
            selectedCell: {
                ...this.state.selectedCell,
                dailyPrices: updatedDailyPrices
            }
        })
    }

    fixPriceInputEnterPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.key
        if (key === 'Enter') {
            this.setState({
                ...this.state,
                selectedCell: {
                    ...this.state.selectedCell,
                    fixPrices: [
                        ...this.state.selectedCell.fixPrices,
                        this.state.fixPrice
                    ]
                },
                fixPrice: 0
            })
        }
    }

    dailyPriceInputEnterPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.key
        if (key === 'Enter') {
            this.setState({
                ...this.state,
                selectedCell: {
                    ...this.state.selectedCell,
                    dailyPrices: [
                        ...this.state.selectedCell.dailyPrices,
                        this.state.dailyPrice
                    ]
                },
                dailyPrice: 0
            })
        }
    }

    submitButtonClicked = () => {
        const menuObject: IMenu = this.state.selectedCell
        const updatedSelectedCell: IMenu = {
            _id: "",
            day: 0,
            year: 0,
            month: 0,
            dinner: {
                _id: "",
                menus: []
            },
            dinnerPrice: 0,
            lunch: {
                _id: "",
                menus: []
            },
            lunchPrice: 0,
            fix: {
                _id: "",
                menus: []
            },
            fixPrices: [],
            daily: {
                _id: "",
                menus: []
            },
            dailyPrices: []
        }

        console.log("menu: ", menuObject)


        this.props.putNewMenu(menuObject)



        this.setState({
            form: false,
            selectedCell: updatedSelectedCell
        })
    }

    handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            ...this.state,
            selectedCell: {
                ...this.state.selectedCell,
                [name]: value
            }
        })
    }

    handleNewMenuInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name: string = event.target.name
        const value: string = event.target.value
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    deleteMenu = (name: string, index: number): void => {
        if (name === 'lunch') {
            const currentLunchs = this.state.selectedCell.lunch.menus
            const updatedLunchs: string[] = currentLunchs.filter((menu, i) => {
                if (i === index) {
                    return false
                } else {
                    return true
                }
            })
            const updatedSelectedCell: IMenu = {
                ...this.state.selectedCell,
                lunch: {
                    ...this.state.selectedCell.lunch,
                    menus: updatedLunchs
                }
            }
            this.setState({
                selectedCell: updatedSelectedCell
            })

        } else if (name === 'dinner') {
            const currentDinners = this.state.selectedCell.dinner.menus
            const updatedDinners: string[] = currentDinners.filter((menu, i) => {
                if (i === index) {
                    return false
                } else {
                    return true
                }
            })
            const updatedSelectedCell: IMenu = {
                ...this.state.selectedCell,
                dinner: {
                    ...this.state.selectedCell.dinner,
                    menus: updatedDinners
                }
            }
            this.setState({
                selectedCell: updatedSelectedCell
            })
        } else if (name === 'fix') {
            const currentFixs = this.state.selectedCell.fix.menus
            const updatedFixs: string[] = currentFixs.filter((menu, i) => {
                if (i === index) {
                    return false
                } else {
                    return true
                }
            })
            const updatedSelectedCell: IMenu = {
                ...this.state.selectedCell,
                fix: {
                    ...this.state.selectedCell.fix,
                    menus: updatedFixs
                }
            }
            this.setState({
                selectedCell: updatedSelectedCell
            })
        } else if (name === 'daily') {
            const currentDaily = this.state.selectedCell.daily.menus
            const updatedDaily: string[] = currentDaily.filter((menu, i) => {
                if (i === index) {
                    return false
                } else {
                    return true
                }
            })
            const updatedSelectedCell: IMenu = {
                ...this.state.selectedCell,
                daily: {
                    ...this.state.selectedCell.daily,
                    menus: updatedDaily
                }
            }
            this.setState({
                selectedCell: updatedSelectedCell
            })
        }
    }

    addNewMenu = (event: React.KeyboardEvent<HTMLDivElement>, name: string): void => {
        const key = event.key
        const { selectedCell } = this.state

        if (key === 'Enter') {
            // 새로운 메뉴 추가

            const newLunch = this.state.newLunch
            const newDinner = this.state.newDinner
            const newFix = this.state.newFix
            const newDaily = this.state.newDaily

            this.setState({
                newLunch: "",
                newDinner: "",
                newDaily: "",
                newFix: ""
            })


            if (name === 'newLunch') {
                const updatedMenu: IMenu = {
                    ...selectedCell,
                    lunch: {
                        _id: selectedCell.lunch._id,
                        menus: [
                            ...selectedCell.lunch.menus,
                            newLunch
                        ]
                    }
                }

                this.setState({
                    selectedCell: updatedMenu
                })
            } else if (name === 'newDinner') {
                const updatedMenu: IMenu = {
                    ...selectedCell,
                    dinner: {
                        _id: selectedCell.dinner._id,
                        menus: [
                            ...selectedCell.dinner.menus,
                            newDinner
                        ]
                    }
                }
                this.setState({
                    selectedCell: updatedMenu
                })
            } else if (name === 'newFix') {
                const updatedMenu: IMenu = {
                    ...selectedCell,
                    fix: {
                        ...selectedCell.fix,
                        menus: [
                            ...selectedCell.fix.menus,
                            newFix
                        ]
                    }
                }
                this.setState({
                    selectedCell: updatedMenu
                })
            } else if (name === 'newDaily') {
                const updatedMenu: IMenu = {
                    ...selectedCell,
                    daily: {
                        ...selectedCell.daily,
                        menus: [
                            ...selectedCell.daily.menus,
                            newDaily
                        ]
                    }
                }
                this.setState({
                    selectedCell: updatedMenu
                })
            }



        }
    }

    xbuttonClicked = (): void => {
        this.setState({
            ...this.state,
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
                dinnerPrice: 0,
                lunch: {
                    _id: "",
                    menus: []
                },
                lunchPrice: 0,
                fix: {
                    _id: "",
                    menus: []
                },
                fixPrices: [],
                daily: {
                    _id: "",
                    menus: []
                },
                dailyPrices: [],
            },
            newDaily: "",
            newDinner: "",
            newFix: "",
            newLunch: "",
            dailyPrice: 0,
            fixPrice: 0
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

        console.log("clicked cell: ", clickedCell)

        this.setState({
            selectedCell: clickedCell,
            form: true
        })
    }

    leftArrowClicked = () => {
        let { year, month } = this.state
        if (month === 0) {
            year = year - 1
            month = 11
            this.setState({
                year,
                month
            })
            this.setDaysAndOffDays(year, month)
        } else {
            month = month - 1
            this.setState({
                month
            })
            this.setDaysAndOffDays(year, month)
        }
    }

    rightArrowClicked = () => {
        const { year, month } = this.state
        if (month === 11) {
            this.setState({
                month: 0,
                year: year + 1
            })
            this.setDaysAndOffDays(year + 1, 0)
        } else {
            this.setState({
                month: month + 1,
            })
            this.setDaysAndOffDays(year, month + 1)
        }

    }


    setMenuObjects = (year: number, month: number) => {
        this.props.fetchMenus(year, month)
    }

    setDaysAndOffDays = (year: number, month: number): void => {

        // 이번달의 첫날이 무슨 요일인지 구한다.
        const week = ['일', '월', '화', '수', '목', '금', '토']
        const dayOfWeek = week[new Date(year, month, 1).getDay()];
        const offdays = this.getOffDays(dayOfWeek)

        // 해당 년과 월에 몇일까지 있는지 계산
        const days = 32 - new Date(year, month, 32).getDate()
        console.log(`${year}년 ${month + 1}월에는 ${days} 만큼의 일이 있습니다. `)

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
    fetchMenus,
    putNewMenu
})(Container)