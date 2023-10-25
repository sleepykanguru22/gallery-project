import { createBoard } from '@wixc3/react-board';
import { GalleryView } from '../../../components/gallery-view/gallery-view';

export default createBoard({
    name: 'GalleryView',
    Board: () => <GalleryView />,
    isSnippet: true,
});
