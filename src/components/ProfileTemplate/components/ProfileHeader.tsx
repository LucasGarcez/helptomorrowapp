import React from 'react';

import {User} from '@domain';

import {Box} from '../../Box/Box';
import {ProfileAvatar} from '../../ProfileAvatar/ProfileAvatar';
import {Text} from '../../Text/Text';

import {ProfileMetadata} from './ProfileMetadata';

type Props = {
  user: User;
};

export function ProfileHeader({user}: Props) {
  return (
    <Box alignItems="center">
      <ProfileAvatar imageURL={user?.profileURL} size={100} borderRadius={40} />

      <Text preset="headingMedium" mt="s16">
        {user.fullName}
      </Text>
      <Text preset="paragraphLarge" mt="s4" color="gray1">
        @{user.username}
      </Text>
      <ProfileMetadata
        followersCount="100"
        followingCount="200"
        publicationCount="3000"
      />
    </Box>
  );
}
