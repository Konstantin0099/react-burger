import PropTypes from "prop-types";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styleConstructor from "./lists.module.css";
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_ITEM_CONSTRUCTOR  } from "../../services/actions/burger-constructor";


const ItemOrder = ({item, index, length}) => {

    const dispatch = useDispatch();

 const [, drop] = useDrop({
    accept: 'items',
    collect: monitor => ({
      isHover: monitor.isOver()
    }),
    hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
              console.log("dragIndex2", dragIndex, "hoverIndex", hoverIndex, "index", index, "item.index", item.index, "item.idInOrder", item.id);
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
             dispatch({type: TOGGLE_ITEM_CONSTRUCTOR, dragIndex: dragIndex, hoverIndex:  hoverIndex })
             item.index = hoverIndex;
             console.log("moveCard_ item.index, index", item.index, index);
        },
    
  }, []);

  const [{ opacity }, drag] = useDrag({
    type: 'items',
    item: { id: item.idInOrder, index: index },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    })
  }, []);

   const ref = useRef(null);
  drag(drop(ref));

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
       dataOrder.map((item, index) => index < (dataOrder.length - 1) 
       ? <ItemOrder  key={item.idInOrder} item={item} index={index} length={dataOrder.length}/>
       : <ItemOrder  key={item.idInOrder + 0.5} item={item} index={index} length={dataOrder.length}/>
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
