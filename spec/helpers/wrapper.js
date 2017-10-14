import { mount } from 'enzyme';
import {Provider} from "react-redux";

export default function createWrapper(Component, store={}) {
  const wrapper = mount(
    <Provider store={store}>
      <Component />
    </Provider>
  );
  return wrapper;
}
