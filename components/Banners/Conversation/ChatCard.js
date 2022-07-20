import {
  ConversationCard,
  IncomingCallCard,
  ProjectRateCard,
} from "../../SubComponents/ConversationCard";

const ChatCard = () => {
  return (
    <div
      className="bg-white rounded-md pt-5 px-2 w-2/3 h-full pb-3 mx-10 relative"
      style={{ boxShadow: "0 4px 12px rgb(23 23 23 / 25%)" }}
    >
      <ConversationCard
        imgSrc="/static/images/Ellipse-4.png"
        imageClassName="md:w-10 md:h-10 w-7 h-7 md:mr-1 absolute"
        chatBackground="#f1f1f1"
        text="Hello! My name is Alex, how can I help you?"
      />
      <ConversationCard
        imgSrc="/static/images/Ellipse-3.png"
        imageClassName="md:w-10 md:h-10 w-7 h-7 md:mr-1 absolute -right-1"
        chatBackground="#FD6003"
        fontColor="#fff"
        text="Hi! Julia here, I have a few question i would love to ask you, if that is ok."
      />
      <ConversationCard
        imgSrc="/static/images/Ellipse-4.png"
        imageClassName="md:w-10 md:h-10 w-7 h-7 md:mr-1 absolute"
        chatBackground="#f1f1f1"
        text="Nice to meet you, Julia!"
      />
      <ConversationCard
        imgSrc=""
        imageClassName="md:w-10 md:h-10 w-7 h-7 md:mr-1 absolute"
        chatBackground="#f1f1f1"
        text={<span className="animate-pulse">▪▪▪▪</span>}
      />
      <div className="mt-4">
        <p className="border border-zinc-300 relative pb-1 rounded">
          <span className="ml-2 text-zinc-300" style={{ fontSize: "11px" }}>
            Write your reply...
          </span>
          <i className="fa fa-angle-right bg-zinc-300 text-white px-3 p-1 rounded-sm absolute right-0.5 top-0.5"></i>
        </p>
      </div>
      <div className="absolute top-28 -right-14">
        <IncomingCallCard />
      </div>
      <div className="absolute md:-bottom-6 md:top-auto top-10 md:-left-28 -left-12">
        <ProjectRateCard />
      </div>
    </div>
  );
};

export default ChatCard;
