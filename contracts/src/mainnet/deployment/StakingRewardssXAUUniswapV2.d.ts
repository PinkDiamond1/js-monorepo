/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from './common';

export interface StakingRewardssXAUUniswapV2Interface extends utils.Interface {
  functions: {
    'DURATION()': FunctionFragment;
    'acceptOwnership()': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'earned(address)': FunctionFragment;
    'exit()': FunctionFragment;
    'getReward()': FunctionFragment;
    'lastTimeRewardApplicable()': FunctionFragment;
    'lastUpdateTime()': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'notifyRewardAmount(uint256)': FunctionFragment;
    'owner()': FunctionFragment;
    'periodFinish()': FunctionFragment;
    'rewardPerToken()': FunctionFragment;
    'rewardPerTokenStored()': FunctionFragment;
    'rewardRate()': FunctionFragment;
    'rewards(address)': FunctionFragment;
    'rewardsDistribution()': FunctionFragment;
    'rewardsToken()': FunctionFragment;
    'setRewardsDistribution(address)': FunctionFragment;
    'stake(uint256)': FunctionFragment;
    'stakingToken()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'userRewardPerTokenPaid(address)': FunctionFragment;
    'withdraw(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'DURATION'
      | 'acceptOwnership'
      | 'balanceOf'
      | 'earned'
      | 'exit'
      | 'getReward'
      | 'lastTimeRewardApplicable'
      | 'lastUpdateTime'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'notifyRewardAmount'
      | 'owner'
      | 'periodFinish'
      | 'rewardPerToken'
      | 'rewardPerTokenStored'
      | 'rewardRate'
      | 'rewards'
      | 'rewardsDistribution'
      | 'rewardsToken'
      | 'setRewardsDistribution'
      | 'stake'
      | 'stakingToken'
      | 'totalSupply'
      | 'userRewardPerTokenPaid'
      | 'withdraw'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'DURATION', values?: undefined): string;
  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'earned', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'exit', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getReward', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastTimeRewardApplicable', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastUpdateTime', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'nominateNewOwner',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'notifyRewardAmount',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'periodFinish', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardPerToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardPerTokenStored', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardRate', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewards', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'rewardsDistribution', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardsToken', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setRewardsDistribution',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'stake', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'stakingToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'userRewardPerTokenPaid',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'withdraw', values: [PromiseOrValue<BigNumberish>]): string;

  decodeFunctionResult(functionFragment: 'DURATION', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'earned', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastTimeRewardApplicable', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastUpdateTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'notifyRewardAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'periodFinish', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardPerToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardPerTokenStored', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardsDistribution', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardsToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setRewardsDistribution', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stake', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stakingToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userRewardPerTokenPaid', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;

  events: {
    'OwnerChanged(address,address)': EventFragment;
    'OwnerNominated(address)': EventFragment;
    'RewardAdded(uint256)': EventFragment;
    'RewardPaid(address,uint256)': EventFragment;
    'Staked(address,uint256)': EventFragment;
    'Withdrawn(address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerNominated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardPaid'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Staked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdrawn'): EventFragment;
}

export interface OwnerChangedEventObject {
  oldOwner: string;
  newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<[string, string], OwnerChangedEventObject>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export interface OwnerNominatedEventObject {
  newOwner: string;
}
export type OwnerNominatedEvent = TypedEvent<[string], OwnerNominatedEventObject>;

export type OwnerNominatedEventFilter = TypedEventFilter<OwnerNominatedEvent>;

export interface RewardAddedEventObject {
  reward: BigNumber;
}
export type RewardAddedEvent = TypedEvent<[BigNumber], RewardAddedEventObject>;

export type RewardAddedEventFilter = TypedEventFilter<RewardAddedEvent>;

export interface RewardPaidEventObject {
  user: string;
  reward: BigNumber;
}
export type RewardPaidEvent = TypedEvent<[string, BigNumber], RewardPaidEventObject>;

export type RewardPaidEventFilter = TypedEventFilter<RewardPaidEvent>;

export interface StakedEventObject {
  user: string;
  amount: BigNumber;
}
export type StakedEvent = TypedEvent<[string, BigNumber], StakedEventObject>;

export type StakedEventFilter = TypedEventFilter<StakedEvent>;

export interface WithdrawnEventObject {
  user: string;
  amount: BigNumber;
}
export type WithdrawnEvent = TypedEvent<[string, BigNumber], WithdrawnEventObject>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface StakingRewardssXAUUniswapV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StakingRewardssXAUUniswapV2Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    getReward(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    notifyRewardAmount(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    periodFinish(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardPerToken(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardsDistribution(overrides?: CallOverrides): Promise<[string]>;

    rewardsToken(overrides?: CallOverrides): Promise<[string]>;

    setRewardsDistribution(
      _rewardsDistribution: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stake(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    userRewardPerTokenPaid(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  getReward(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

  lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

  nominateNewOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  notifyRewardAmount(
    reward: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

  rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

  rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

  rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

  rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  rewardsDistribution(overrides?: CallOverrides): Promise<string>;

  rewardsToken(overrides?: CallOverrides): Promise<string>;

  setRewardsDistribution(
    _rewardsDistribution: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stake(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stakingToken(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  userRewardPerTokenPaid(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdraw(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    exit(overrides?: CallOverrides): Promise<void>;

    getReward(overrides?: CallOverrides): Promise<void>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    notifyRewardAmount(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    rewardsDistribution(overrides?: CallOverrides): Promise<string>;

    rewardsToken(overrides?: CallOverrides): Promise<string>;

    setRewardsDistribution(
      _rewardsDistribution: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    stakingToken(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    userRewardPerTokenPaid(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'OwnerChanged(address,address)'(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    'OwnerNominated(address)'(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;

    'RewardAdded(uint256)'(reward?: null): RewardAddedEventFilter;
    RewardAdded(reward?: null): RewardAddedEventFilter;

    'RewardPaid(address,uint256)'(
      user?: PromiseOrValue<string> | null,
      reward?: null
    ): RewardPaidEventFilter;
    RewardPaid(user?: PromiseOrValue<string> | null, reward?: null): RewardPaidEventFilter;

    'Staked(address,uint256)'(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): StakedEventFilter;
    Staked(user?: PromiseOrValue<string> | null, amount?: null): StakedEventFilter;

    'Withdrawn(address,uint256)'(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawnEventFilter;
    Withdrawn(user?: PromiseOrValue<string> | null, amount?: null): WithdrawnEventFilter;
  };

  estimateGas: {
    DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    rewardsDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsToken(overrides?: CallOverrides): Promise<BigNumber>;

    setRewardsDistribution(
      _rewardsDistribution: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stake(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stakingToken(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    userRewardPerTokenPaid(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    earned(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    getReward(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    notifyRewardAmount(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    periodFinish(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsDistribution(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setRewardsDistribution(
      _rewardsDistribution: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userRewardPerTokenPaid(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
