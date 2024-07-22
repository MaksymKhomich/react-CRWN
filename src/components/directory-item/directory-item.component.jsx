import { useNavigate } from 'react-router-dom';

import { 
    DerectoryItemContainer, 
    Body, 
    BackgroundImage
} from './directory-item.style'

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DerectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage $imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DerectoryItemContainer>
    )
}

export default DirectoryItem;