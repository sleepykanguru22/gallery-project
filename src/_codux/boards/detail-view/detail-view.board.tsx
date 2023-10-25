import { createBoard } from '@wixc3/react-board';
import { DetailView } from '../../../components/detail-view/detail-view';

export default createBoard({
    name: 'DetailView',
    Board: () => <DetailView />,
    isSnippet: true,
});
