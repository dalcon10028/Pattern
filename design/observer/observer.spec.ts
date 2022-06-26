import Observable from "./observable";

const observable = new Observable();

it('메시지 보내기를 Observer에 등록하고 notify로 메시지를 보내면 messageList에 추가됩니다.', () => {
    const messageList: string[] = []
    const sendMessage = (message: string) => {
        messageList.push(message);
    };
    observable.subscribe(sendMessage);
    observable.notify('hi');

    expect(messageList[0]).toBe('hi');
});