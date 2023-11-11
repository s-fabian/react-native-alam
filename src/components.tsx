import alam, { type TailwindArgs } from '.';
import {
  type DefaultSectionT,
  SafeAreaView,
  View,
  type ViewProps,
  Text,
  type TextProps,
  Image,
  type ImageProps,
  TextInput,
  type TextInputProps,
  ScrollView,
  type ScrollViewProps,
  FlatList,
  type FlatListProps,
  SectionList,
  type SectionListProps,
  ImageBackground,
  type ImageBackgroundProps,
  KeyboardAvoidingView,
  type KeyboardAvoidingViewProps,
  Pressable,
  type PressableProps,
  TouchableHighlight,
  type TouchableHighlightProps,
  TouchableOpacity,
  type TouchableOpacityProps,
  TouchableWithoutFeedback,
  type TouchableWithoutFeedbackProps,
} from 'react-native';
import React from 'react';

export const Alam = function () {};

Alam.View = alam<ViewProps, React.ReactElement>((props) => <View {...props} />);
Alam.TouchableHighlight = alam<TouchableHighlightProps, React.ReactElement>(
  (props) => <TouchableHighlight {...props} />
);
Alam.KeyboardAvoidingView = alam<KeyboardAvoidingViewProps, React.ReactElement>(
  (props) => <KeyboardAvoidingView {...props} />
);
Alam.Text = alam<TextProps, React.ReactElement>((props) => <Text {...props} />);
Alam.Image = alam<ImageProps, React.ReactElement>((props) => (
  <Image {...props} />
));
Alam.ImageBackground = alam<ImageBackgroundProps, React.ReactElement>(
  (props) => <ImageBackground {...props} />
);
Alam.TextInput = alam<TextInputProps, React.ReactElement>((props) => (
  <TextInput {...props} />
));
Alam.ScrollView = alam<ScrollViewProps, React.ReactElement>((props) => (
  <ScrollView {...props} />
));
Alam.SafeAreaView = alam<ViewProps, React.ReactElement>((props) => (
  <SafeAreaView {...props} />
));
Alam.Pressable = alam<PressableProps, React.ReactElement>((props) => (
  <Pressable {...props} />
));
Alam.TouchableOpacity = alam<TouchableOpacityProps, React.ReactElement>(
  (props) => <TouchableOpacity {...props} />
);
Alam.TouchableWithoutFeedback = alam<
  TouchableWithoutFeedbackProps,
  React.ReactElement
>((props) => <TouchableWithoutFeedback {...props} />);

const flatListWrap = alam<FlatListProps<any>, React.ReactElement>((props) => (
  <FlatList {...props} />
));
Alam.FlatList = <T extends any>(props: TailwindArgs & FlatListProps<T>) =>
  flatListWrap(props);

const sectionListWrap = alam<SectionListProps<any, any>, React.ReactElement>(
  (props) => <SectionList {...props} />
);
Alam.SectionList = <ItemT, SectionT = DefaultSectionT>(
  props: TailwindArgs & SectionListProps<ItemT, SectionT>
) => sectionListWrap(props);

export default Alam;
