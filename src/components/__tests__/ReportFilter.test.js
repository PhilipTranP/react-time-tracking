jest.useFakeTimers()
import React from 'react'
import {shallow, mount} from 'enzyme'
import {ReportFilter} from '../ReportFilter'
import withTheme from '../../__mocks__/withTheme'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const ReportFilter_withTheme = withTheme(ReportFilter)

describe('<ReportFilter />', () => {
  it ('render', () => {
    const props = {
      // startDate: ,
      // endDate
      onChange: jest.fn()
    }
    const wrapper = shallow(<ReportFilter {...props} />)
    wrapper.instance().handleCloseDialog()
    expect(props.onChange).toHaveBeenCalled()
  })

})
