import ModalSwitch from "./ModalSwitch";
import MakePostMd from "./MakePostMd";
import PostCommentMd from "./PostCommentMd";
import RequestLoginMd from "./RequestLoginMd";
import StoryMakeMd from "./StoryMakeMd";
const Modals = () => {
  return (
    <ModalSwitch
      modals={{
        makePostMd: <MakePostMd />,
        storyMakeMd: <StoryMakeMd />,
        postCommentMd: <PostCommentMd />,
        requestLoginMd: <RequestLoginMd />,
      }}
    />
  );
};

export default Modals;
