import '../App.css';
import Video from "./Video";
import Article from "./Article";
import WrapperComponent from './WrapperComponent';

function List(props) {
    const VideoComponent = WrapperComponent(Video);
    const ArticleComponent = WrapperComponent(Article);

    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoComponent key={item.id} {...item} />
                );

            case 'article':
                return (
                    <ArticleComponent key={item.id} {...item} />
                );
        }
    });
};

export default List;