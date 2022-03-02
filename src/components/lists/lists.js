import PropTypes from "prop-types";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styleConstructor from "./lists.module.css";
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_ITEM_CONSTRUCTOR, ADD_ITEM_CONSTRUCTOR, ADD_BUN_CONSTRUCTOR, DELETE_ITEM_CONSTRUCTOR } from "../../services/actions/burger-constructor";


const ItemOrder = ({item, index, length}) => {
    const dispatch = useDispatch();
 const [, drop] = useDrop({
    accept: 'items',
    collect: monitor => ({
      // isHover: monitor.isOver()
    }),
    drop (el) {
  if (el.drag === "food") {
             el.el.type === "bun" 
             ? dispatch({type: ADD_BUN_CONSTRUCTOR, dragItem: el.el })
             : dispatch({type: ADD_ITEM_CONSTRUCTOR, dragIndex: index, dragItem: el.el })
            }
    },
    hover(el, monitor) {
            if (!ref.current) {
                return;
            }
            // console.log("el", el);
            const dragIndex = el.index;
             if (dragIndex === 0 || dragIndex === length - 1) {
                return;
            }
            const hoverIndex = index;
            if (hoverIndex === 0 || hoverIndex === length - 1) {
                return;
            }
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            if (el.drag !== "food") {dispatch({type: TOGGLE_ITEM_CONSTRUCTOR, dragIndex: dragIndex, hoverIndex:  hoverIndex })}
             index = hoverIndex;
             el.index = hoverIndex;
            //  console.log("moveCard_ item.index, index", el.index, index);
        },
    
  }, [index, length]);

  const [{ opacity }, drag] = useDrag({
    type: 'items',
    item: { id: item.idInOrder, index: index },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    })
  }, [index]);

   const ref = useRef(null);
  drag(drop(ref));

const deleteConstructorElement = (e) => {
  // console.log("++++", e.nativeEvent.path[2].classList[0]);
  e.nativeEvent.path[2].classList[0] === "constructor-element__action" 
  ? dispatch({type: DELETE_ITEM_CONSTRUCTOR, index })
  : console.log(":", e.nativeEvent.path[2].classList[0])
}



      return (
      
        index === 0 ? (
              <li
                ref={ref}
                className={styleConstructor.ingredient + " pl-8 mb-2 mr-2"}
                style={{opacity: `${opacity}`}}
              >
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={item.name + " (верх)" + item.idInOrder + " >" + index}
                  price={item.price}
                  thumbnail={item.image}
                />
              </li>) : (index === (length - 1)) ? (
              <li
                ref={ref}
                className={styleConstructor.ingredient + " pl-8 mt-3 mr-2"}
                style={{opacity: `${opacity}`}}
              >
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={item.name + " (низ)" + item.idInOrder + " >" + index}
                  price={item.price}
                  thumbnail={item.image}
                />
              </li>
              ) : (
                <li
                  ref={ref}
                  className={styleConstructor.ingredient + " mt-2 mb-2"}
                  style={{opacity: `${opacity}`}}
                  onClickCapture={deleteConstructorElement}
                >
                  <DragIcon />
                  <ConstructorElement
                    text={item.name + "_" + item.idInOrder + " >" + index}
                    price={item.price}
                    thumbnail={item.image}
                  
                  />
                </li>
              )
             )
             }


export const Lists = ({dataOrder}) => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "flex-end",
        marginBottom: "40px",
      }}
    >
      <ul className={styleConstructor.order}>
        { 
       dataOrder.map((item, index) => 
        <ItemOrder  key={item.idInOrder} item={item} index={index} length={dataOrder.length}/>
       )
          }
      </ul>
    </div>
  );
};
Lists.propTypes = {
  dataOrder: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      calories: PropTypes.number,
      type: PropTypes.string,
      price: PropTypes.number,
      carbohydrates: PropTypes.number,
      count: PropTypes.number,
      fat: PropTypes.number,
      proteins: PropTypes.number,
    })
  )
};
