/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as sqlops from 'sqlops';
import { AgentUtils } from '../agentUtils';

export class SchedulePickerData {

	private _ownerUri: string;
	private _agentService: sqlops.AgentServicesProvider;
	private _schedules: sqlops.AgentJobScheduleInfo[];

	constructor(ownerUri: string) {
		this._ownerUri = ownerUri;
	}

	public get schedules(): sqlops.AgentJobScheduleInfo[] {
		return this._schedules;
	}

	public async initialize() {
		this._agentService = await AgentUtils.getAgentService();
		this._schedules = [
			{
				ID: 1,
				Name: '7AM',
				Enabled: true,
				Description: '7AM'
			},
			{
				ID: 2,
				Name: '8AM',
				Enabled: true,
				Description: '8AM'
			},
			{
				ID: 3,
				Name: '9AM',
				Enabled: true,
				Description: '9AM'
			}
		];
	}
}