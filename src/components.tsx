import {
  type TailwindArgs,
  type DefaultAlam,
  type ExtendedAlam,
  createAlam,
} from '.';
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

interface AlamInterface<A extends ExtendedAlam> {
  View(props: TailwindArgs<A> & ViewProps): React.ReactElement;
  TouchableHighlight(
    props: TailwindArgs<A> & TouchableHighlightProps
  ): React.ReactElement;
  KeyboardAvoidingView(
    props: TailwindArgs<A> & KeyboardAvoidingViewProps
  ): React.ReactElement;
  Text(props: TailwindArgs<A> & TextProps): React.ReactElement;
  Image(props: TailwindArgs<A> & ImageProps): React.ReactElement;
  ImageBackground(
    props: TailwindArgs<A> & ImageBackgroundProps
  ): React.ReactElement;
  TextInput(props: TailwindArgs<A> & TextInputProps): React.ReactElement;
  ScrollView(props: TailwindArgs<A> & ScrollViewProps): React.ReactElement;
  SafeAreaView(props: TailwindArgs<A> & ViewProps): React.ReactElement;
  Pressable(props: TailwindArgs<A> & PressableProps): React.ReactElement;
  TouchableOpacity(
    props: TailwindArgs<A> & TouchableOpacityProps
  ): React.ReactElement;
  TouchableWithoutFeedback(
    props: TailwindArgs<A> & TouchableWithoutFeedbackProps
  ): React.ReactElement;
  FlatList<T>(
    props: TailwindArgs<A> & TailwindArgs & FlatListProps<T>
  ): React.ReactElement;
  SectionList<ItemT, SectionT = DefaultSectionT>(
    props: TailwindArgs<A> & TailwindArgs & SectionListProps<ItemT, SectionT>
  ): React.ReactElement;
}

export function createAlamComponents<A extends ExtendedAlam>(
  attr: A
): AlamInterface<A>;
export function createAlamComponents(): AlamInterface<DefaultAlam>;
export function createAlamComponents<A extends ExtendedAlam>(
  attr?: A
): AlamInterface<A> {
  const alam = attr ? createAlam(attr) : createAlam();
  const Alam = function () {};

  Alam.View = alam<ViewProps, React.ReactElement>((props) => (
    <View {...props} />
  ));
  Alam.TouchableHighlight = alam<TouchableHighlightProps, React.ReactElement>(
    (props) => <TouchableHighlight {...props} />
  );
  Alam.KeyboardAvoidingView = alam<
    KeyboardAvoidingViewProps,
    React.ReactElement
  >((props) => <KeyboardAvoidingView {...props} />);
  Alam.Text = alam<TextProps, React.ReactElement>((props) => (
    <Text {...props} />
  ));
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
  Alam.FlatList = <T extends any>(
    props: TailwindArgs<A> & TailwindArgs & FlatListProps<T>
  ) => flatListWrap(props);

  const sectionListWrap = alam<SectionListProps<any, any>, React.ReactElement>(
    (props) => <SectionList {...props} />
  );
  Alam.SectionList = <ItemT, SectionT = DefaultSectionT>(
    props: TailwindArgs<A> & TailwindArgs & SectionListProps<ItemT, SectionT>
  ) => sectionListWrap(props);

  return Alam;
}

export const Alam = createAlamComponents();
export default Alam;
