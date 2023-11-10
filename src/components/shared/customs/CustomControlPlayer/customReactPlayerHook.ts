import { LegacyRef, useReducer, useRef } from "react";
import ReactPlayer from "react-player";
import { BaseReactPlayerProps, OnProgressProps } from "react-player/base";

export type Music = {
  id: number;
  song: string;
  singer: string;
  track: string;
  imgThumbnail?: string;
};

export interface PlayerState {
  duration: number;
  played: number;
  playing: boolean;
  muted: boolean;
  seeking: boolean;
  music: Music;
}

interface CustomReactPlayerHookProps {
  playerList: Music[];
}

export const useCustomReactPlayer = (props: CustomReactPlayerHookProps) => {
  const { playerList } = props;

  const player = useRef<LegacyRef<ReactPlayer> | null>(null);

  const [playerState, setPlayerState] = useReducer(
    (state: PlayerState, action: Partial<PlayerState>) => ({
      ...state,
      ...action,
    }),
    {
      duration: 0,
      played: 0,
      playing: false,
      muted: false,
      seeking: false,
      music: playerList[0],
    },
  );

  const handleOnPlay = () => {
    setPlayerState({
      playing: !playerState.playing,
    });
  };

  const handleOnMute = () => {
    setPlayerState({
      muted: !playerState.muted,
    });
  };

  const handleOnDuration = (duration: number) => {
    setPlayerState({
      duration,
    });
  };

  const handleSeekChange = (value: number) => {
    setPlayerState({
      played: value,
    });
  };

  const handleSeekMouseDown = () => {
    setPlayerState({
      seeking: true,
    });
  };

  const handleSeekMouseUp = (value: number) => {
    setPlayerState({
      seeking: false,
    });
    setPlayerState({
      played: value,
    });
    player && (player?.current as BaseReactPlayerProps)?.seekTo(value);
  };

  const handleProgress = (state: OnProgressProps) => {
    const { played } = state;
    if (!playerState.seeking) {
      setPlayerState({
        played,
      });
    }
  };

  const handleOnEnded = () => {
    const currentIndx = playerList.findIndex(
      (sound) => sound.id === playerState.music.id,
    );
    if (currentIndx < playerList.length) {
      const nextPlayIndx = currentIndx + 1;
      const nextMusic = playerList[nextPlayIndx];
      const defaultMusic = playerList[0];

      setPlayerState({
        music: nextMusic ? nextMusic : defaultMusic,
      });
    } else {
      setPlayerState({
        playing: false,
      });
    }
  };

  const handlePlayNext = () => {
    const currentIndx = playerList.findIndex(
      (sound) => sound.id === playerState.music.id,
    );
    const nextPlayIndx = currentIndx + 1;
    const nextMusic = playerList[nextPlayIndx];
    const defaultMusic = playerList[0];

    setPlayerState({
      music: nextMusic ? nextMusic : defaultMusic,
    });
  };

  const handlePlayPrev = () => {
    const currentIndx = playerList.findIndex(
      (sound) => sound.id === playerState.music.id,
    );
    const prevPlayIndx = currentIndx - 1;
    const prevMusic = playerList[prevPlayIndx];
    const defaultMusic = playerList[0];

    setPlayerState({
      music: prevMusic ? prevMusic : defaultMusic,
    });
  };

  const playerRef = (playerRef: LegacyRef<ReactPlayer>) => {
    player.current = playerRef;
  };

  return {
    playerState,
    setPlayerState,
    playerRef,
    player,
    handleOnPlay,
    handleOnMute,
    handleOnDuration,
    handleSeekChange,
    handleSeekMouseDown,
    handleSeekMouseUp,
    handleProgress,
    handleOnEnded,
    handlePlayNext,
    handlePlayPrev,
  };
};
