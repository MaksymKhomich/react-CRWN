import Button from '../button/button.component';
import './category-item.style.scss'

const CategoryItem = ({ category }) => {
    const {imageUrl, title} = category;

    return (
        <div className="category-container">
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`,
                }} />
                <div className="category-body-container">
                <h2>{title}</h2>
                <Button>Shop Now</Button>
            </div>
        </div>
    )
}

export default CategoryItem