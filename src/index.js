// libs should be imported like that
import * as angular from 'angular';

// module imports
import {ServiceTemplate} from './template.service';

angular
	.module('kiwigrid.fe.webpack.service.template', [])
	.service('ServiceTemplate', ServiceTemplate);