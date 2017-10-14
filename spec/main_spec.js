import { mount, shallow } from 'enzyme';
import Main from '../src/Main';

describe('<Main />', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<Main />);
    expect(wrapper.length).to.equal(1);
  });
});
