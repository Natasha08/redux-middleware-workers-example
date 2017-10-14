import Main from '../src/main';

it('renders without crashing', () => {
  // const wrapper = mount(<Main />);
  const wrapper = shallow(
      <Label>Hello Jest!</Label>
  );
  expect(wrapper).toMatchSnapshot();
});
