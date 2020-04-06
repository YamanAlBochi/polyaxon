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

package organizations_v1

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
)

// NewGetOrganizationMemberParams creates a new GetOrganizationMemberParams object
// with the default values initialized.
func NewGetOrganizationMemberParams() *GetOrganizationMemberParams {
	var ()
	return &GetOrganizationMemberParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewGetOrganizationMemberParamsWithTimeout creates a new GetOrganizationMemberParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewGetOrganizationMemberParamsWithTimeout(timeout time.Duration) *GetOrganizationMemberParams {
	var ()
	return &GetOrganizationMemberParams{

		timeout: timeout,
	}
}

// NewGetOrganizationMemberParamsWithContext creates a new GetOrganizationMemberParams object
// with the default values initialized, and the ability to set a context for a request
func NewGetOrganizationMemberParamsWithContext(ctx context.Context) *GetOrganizationMemberParams {
	var ()
	return &GetOrganizationMemberParams{

		Context: ctx,
	}
}

// NewGetOrganizationMemberParamsWithHTTPClient creates a new GetOrganizationMemberParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewGetOrganizationMemberParamsWithHTTPClient(client *http.Client) *GetOrganizationMemberParams {
	var ()
	return &GetOrganizationMemberParams{
		HTTPClient: client,
	}
}

/*GetOrganizationMemberParams contains all the parameters to send to the API endpoint
for the get organization member operation typically these are written to a http.Request
*/
type GetOrganizationMemberParams struct {

	/*Owner
	  Owner of the namespace

	*/
	Owner string
	/*User
	  Memeber under namesapce

	*/
	User string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the get organization member params
func (o *GetOrganizationMemberParams) WithTimeout(timeout time.Duration) *GetOrganizationMemberParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get organization member params
func (o *GetOrganizationMemberParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get organization member params
func (o *GetOrganizationMemberParams) WithContext(ctx context.Context) *GetOrganizationMemberParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get organization member params
func (o *GetOrganizationMemberParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get organization member params
func (o *GetOrganizationMemberParams) WithHTTPClient(client *http.Client) *GetOrganizationMemberParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get organization member params
func (o *GetOrganizationMemberParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithOwner adds the owner to the get organization member params
func (o *GetOrganizationMemberParams) WithOwner(owner string) *GetOrganizationMemberParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the get organization member params
func (o *GetOrganizationMemberParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithUser adds the user to the get organization member params
func (o *GetOrganizationMemberParams) WithUser(user string) *GetOrganizationMemberParams {
	o.SetUser(user)
	return o
}

// SetUser adds the user to the get organization member params
func (o *GetOrganizationMemberParams) SetUser(user string) {
	o.User = user
}

// WriteToRequest writes these params to a swagger request
func (o *GetOrganizationMemberParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	// path param user
	if err := r.SetPathParam("user", o.User); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
