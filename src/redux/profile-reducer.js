const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initState = {
    postData: [
        {
            id: 1,
            message: 'This socisl network is a bullshit',
            likeCount: 55,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19hlt6seYm5CmLduU450zkGbiDo6plZABHyvfmzSWFxAhAIM8'
        },
        {
            id: 2,
            message: ':) XoXoXo It is real bullshit!!!!',
            likeCount: 34,
            avatar: 'http://cdn01.ru/files/users/images/32/c4/32c4cb047498da9301d64986ee0a646b.jpeg'
        }
    ],
    newPostText: ''
};

const profileReducer = (state = initState, action) => {
    let stateCopy = {...state};
    let addPost = () => {
        let newPost = {
            id: 4,
            message: state.newPostText,
            likeCount: 0,
            avatar: ''
        };
        stateCopy.postData = [...state.postData];
        stateCopy.postData.push(newPost);
        stateCopy.newPostText = ''
    }

    let updateNewPostText = (newText) => {
        stateCopy.newPostText = newText;
    }

    switch (action.type) {
        case ADD_POST:
            addPost();
            return (stateCopy);
        case UPDATE_NEW_POST_TEXT:
            updateNewPostText(action.newText);
            return (stateCopy);
        default:
            return (stateCopy);
    }

}

export const addPostActionCreator = () => ({
    type: 'ADD_POST'
});
export const updateNewPostTextActionCreator = (text) => ({
    type: 'UPDATE_NEW_POST_TEXT',
    newText: text
});

export default profileReducer;
