import React from 'react';
import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

import {useCameralRoll} from '@services';

import {Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {Header} from './components/Header';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const NUM_COLUMNS = 4;
const ITEM_WIDTH = SCREEN_WIDTH / 4;
export function NewPostScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AppTabScreenProps<'NewPostScreen'>) {
  const {list} = useCameralRoll();

  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <Image
        key={item}
        source={{uri: item}}
        style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
      />
    );
  }
  return (
    <Screen canGoBack title="Novo post" noPaddingHorizontal>
      <FlatList
        data={list}
        renderItem={renderItem}
        numColumns={NUM_COLUMNS}
        ListHeaderComponent={
          <Header imageUri={list[0]} imageWidth={SCREEN_WIDTH} />
        }
      />
    </Screen>
  );
}
