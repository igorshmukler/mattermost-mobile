// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import PropTypes from 'prop-types';
import React from 'react';
import CombinedJoinLeaveMessage from 'app/components/combined_joinleave_message/';
import ChannelSystemMessage from 'app/components/channel_system_message/channel_system_message';
import {Posts} from 'mattermost-redux/constants';

export default class SystemMessage extends React.PureComponent {
    static propTypes = {
        post: PropTypes.object,
        allUserIds: PropTypes.array,
        allUsernames: PropTypes.array,
        linkStyle: PropTypes.object,
        messageData: PropTypes.array,
        postType: PropTypes.string.isRequired,
        theme: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
        textStyles: PropTypes.object.isRequired,
    };

    render() {
        const {postType, navigator, theme, textStyles} = this.props;
        if (postType === Posts.POST_TYPES.PURPOSE_CHANGE || postType === Posts.POST_TYPES.HEADER_CHANGE ||
            postType === Posts.POST_TYPES.DISPLAYNAME_CHANGE || postType === Posts.POST_TYPES.CHANNEL_DELETED) {
            return (
                <ChannelSystemMessage
                    post={this.props.post}
                    theme={theme}
                    navigator={navigator}
                    textStyles={textStyles}
                />);
        } else if (postType === Posts.POST_TYPES.COMBINED_USER_ACTIVITY) {
            return (
                <CombinedJoinLeaveMessage
                    allUserIds={this.props.allUserIds}
                    allUsernames={this.props.allUsernames}
                    linkStyle={textStyles.link}
                    messageData={this.props.messageData}
                    navigator={navigator}
                    textStyles={textStyles}
                    theme={theme}
                />);
        }
        return null;
    }
}