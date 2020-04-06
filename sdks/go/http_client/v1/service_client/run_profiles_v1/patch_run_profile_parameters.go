// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Code generated by go-swagger; DO NOT EDIT.

package run_profiles_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// NewPatchRunProfileParams creates a new PatchRunProfileParams object
// with the default values initialized.
func NewPatchRunProfileParams() *PatchRunProfileParams {
	var ()
	return &PatchRunProfileParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewPatchRunProfileParamsWithTimeout creates a new PatchRunProfileParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewPatchRunProfileParamsWithTimeout(timeout time.Duration) *PatchRunProfileParams {
	var ()
	return &PatchRunProfileParams{

		timeout: timeout,
	}
}

// NewPatchRunProfileParamsWithContext creates a new PatchRunProfileParams object
// with the default values initialized, and the ability to set a context for a request
func NewPatchRunProfileParamsWithContext(ctx context.Context) *PatchRunProfileParams {
	var ()
	return &PatchRunProfileParams{

		Context: ctx,
	}
}

// NewPatchRunProfileParamsWithHTTPClient creates a new PatchRunProfileParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewPatchRunProfileParamsWithHTTPClient(client *http.Client) *PatchRunProfileParams {
	var ()
	return &PatchRunProfileParams{
		HTTPClient: client,
	}
}

/*PatchRunProfileParams contains all the parameters to send to the API endpoint
for the patch run profile operation typically these are written to a http.Request
*/
type PatchRunProfileParams struct {

	/*Body
	  Artifact store body

	*/
	Body *service_model.V1RunProfile
	/*Owner
	  Owner of the namespace

	*/
	Owner string
	/*RunProfileUUID
	  UUID

	*/
	RunProfileUUID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the patch run profile params
func (o *PatchRunProfileParams) WithTimeout(timeout time.Duration) *PatchRunProfileParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the patch run profile params
func (o *PatchRunProfileParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the patch run profile params
func (o *PatchRunProfileParams) WithContext(ctx context.Context) *PatchRunProfileParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the patch run profile params
func (o *PatchRunProfileParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the patch run profile params
func (o *PatchRunProfileParams) WithHTTPClient(client *http.Client) *PatchRunProfileParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the patch run profile params
func (o *PatchRunProfileParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the patch run profile params
func (o *PatchRunProfileParams) WithBody(body *service_model.V1RunProfile) *PatchRunProfileParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the patch run profile params
func (o *PatchRunProfileParams) SetBody(body *service_model.V1RunProfile) {
	o.Body = body
}

// WithOwner adds the owner to the patch run profile params
func (o *PatchRunProfileParams) WithOwner(owner string) *PatchRunProfileParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the patch run profile params
func (o *PatchRunProfileParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithRunProfileUUID adds the runProfileUUID to the patch run profile params
func (o *PatchRunProfileParams) WithRunProfileUUID(runProfileUUID string) *PatchRunProfileParams {
	o.SetRunProfileUUID(runProfileUUID)
	return o
}

// SetRunProfileUUID adds the runProfileUuid to the patch run profile params
func (o *PatchRunProfileParams) SetRunProfileUUID(runProfileUUID string) {
	o.RunProfileUUID = runProfileUUID
}

// WriteToRequest writes these params to a swagger request
func (o *PatchRunProfileParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
		}
	}

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	// path param run_profile.uuid
	if err := r.SetPathParam("run_profile.uuid", o.RunProfileUUID); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
