import profileReducer, {addPost, deletePost} from "./profileReducer";

const state = {
    postData: [
        {id: 1, message: 'Hi, How are you?', likesCount: '189'},
        {id: 2, message: 'I\'m Happy', likesCount: '95'},
    ],
        newPostText: '',
    profile: null,
    isPreloader: true,
    status: '',
};


it('post should be add', function () {
    let action = addPost('tra-ta-ta');
    let posts = profileReducer(state, action);
    expect(posts.postData.length).toBe(3)
});


it('text of new post should be tra-ta-ta ', function () {
    let action = addPost('tra-ta-ta');
    let posts = profileReducer(state, action);
    expect(posts.postData[2].message).toBe('tra-ta-ta')
});

it('post should be delete', function () {
    let action = deletePost(1);
    let posts = profileReducer(state, action);
    expect(posts.postData.length).toBe(1)
})