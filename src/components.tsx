import tailwindify, { type TailwindArgs } from '.';
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

export const Tw = function () {};

Tw.View = tailwindify<ViewProps, React.ReactElement>((props) => (
  <View {...props} />
));
Tw.TouchableHighlight = tailwindify<
  TouchableHighlightProps,
  React.ReactElement
>((props) => <TouchableHighlight {...props} />);
Tw.KeyboardAvoidingView = tailwindify<
  KeyboardAvoidingViewProps,
  React.ReactElement
>((props) => <KeyboardAvoidingView {...props} />);
Tw.Text = tailwindify<TextProps, React.ReactElement>((props) => (
  <Text {...props} />
));
Tw.Image = tailwindify<ImageProps, React.ReactElement>((props) => (
  <Image {...props} />
));
Tw.ImageBackground = tailwindify<ImageBackgroundProps, React.ReactElement>(
  (props) => <ImageBackground {...props} />
);
Tw.TextInput = tailwindify<TextInputProps, React.ReactElement>((props) => (
  <TextInput {...props} />
));
Tw.ScrollView = tailwindify<ScrollViewProps, React.ReactElement>((props) => (
  <ScrollView {...props} />
));
Tw.SafeAreaView = tailwindify<ViewProps, React.ReactElement>((props) => (
  <SafeAreaView {...props} />
));
Tw.Pressable = tailwindify<PressableProps, React.ReactElement>((props) => (
  <Pressable {...props} />
));
Tw.TouchableOpacity = tailwindify<TouchableOpacityProps, React.ReactElement>(
  (props) => <TouchableOpacity {...props} />
);
Tw.TouchableWithoutFeedback = tailwindify<
  TouchableWithoutFeedbackProps,
  React.ReactElement
>((props) => <TouchableWithoutFeedback {...props} />);

const flatListWrap = tailwindify<FlatListProps<any>, React.ReactElement>(
  (props) => <FlatList {...props} />
);
Tw.FlatList = <T extends any>(props: TailwindArgs & FlatListProps<T>) =>
  flatListWrap(props);

const sectionListWrap = tailwindify<
  SectionListProps<any, any>,
  React.ReactElement
>((props) => <SectionList {...props} />);
Tw.SectionList = <ItemT, SectionT = DefaultSectionT>(
  props: TailwindArgs & SectionListProps<ItemT, SectionT>
) => sectionListWrap(props);

export default Tw;
